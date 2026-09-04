import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(scriptDirectory, "..");
const configPath = resolve(repositoryRoot, "research/monitoring/official-sources.json");
const outputPath = resolve(repositoryRoot, "research/monitoring/official-sources-latest.md");
const config = JSON.parse(await readFile(configPath, "utf8"));

function stripMarkup(value) {
  return value
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function extractTitle(html, fallback) {
  const match = html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i);
  return stripMarkup(match?.[1] ?? fallback).slice(0, 240);
}

async function inspectSource(source) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20_000);
  try {
    const response = await fetch(source.url, {
      headers: { "User-Agent": "agent-native-society-source-monitor/1.0" },
      redirect: "follow",
      signal: controller.signal
    });
    const body = await response.text();
    const contentHash = createHash("sha256")
      .update(body.replace(/\s+/g, " ").trim())
      .digest("hex")
      .slice(0, 16);
    return {
      ...source,
      status: response.status,
      finalUrl: response.url,
      title: extractTitle(body, source.label),
      etag: response.headers.get("etag") ?? "—",
      lastModified: response.headers.get("last-modified") ?? "—",
      contentHash
    };
  } catch (error) {
    return {
      ...source,
      status: "ERROR",
      finalUrl: source.url,
      title: error instanceof Error ? error.name : "Unknown error",
      etag: "—",
      lastModified: "—",
      contentHash: "—"
    };
  } finally {
    clearTimeout(timeout);
  }
}

const results = await Promise.all(config.sources.map(inspectSource));
const observedAt = new Date().toISOString();
const rows = results.map((result) =>
  `| ${result.id} | ${result.status} | [${result.title}](${result.finalUrl}) | ${result.etag.replaceAll("|", "\\|")} | ${result.lastModified.replaceAll("|", "\\|")} | \`${result.contentHash}\` |`
);

const document = `# Official-source monitor — latest snapshot

**Generated:** ${observedAt}  
**Purpose:** detect changes in selected primary sources that may warrant research updates.  
**Status:** machine-generated review input; it is not a research conclusion, endorsement, legal analysis, or automatic amendment to project doctrine.

## Review rule

A scheduled workflow creates a draft pull request only when this snapshot changes. A human reviewer must inspect the source and decide whether a substantive research record, ADR, specification change, or no action is appropriate. Never merge merely because a source hash changed.

## Snapshot

| Source | HTTP status | Resolved title/link | ETag | Last-Modified | Normalized body hash |
|---|---:|---|---|---|---|
${rows.join("\n")}

## Monitored sources

Configuration: [official-sources.json](official-sources.json). The list is intentionally small and primary-source oriented. Adding a source is a material research decision and should explain relevance and maintenance cost.
`;

function comparableSnapshot(value) {
  return value.replace(/^\*\*Generated:\*\* .*$/m, "**Generated:** <ignored>");
}

try {
  const current = await readFile(outputPath, "utf8");
  if (comparableSnapshot(current) === comparableSnapshot(document)) {
    console.log("No material source-monitor change detected; snapshot left untouched.");
    process.exit(0);
  }
} catch (error) {
  if (error?.code !== "ENOENT") throw error;
}

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, document, "utf8");
console.log(`Wrote ${outputPath} with ${results.length} source observations.`);
