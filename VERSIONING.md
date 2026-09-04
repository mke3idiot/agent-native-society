# Versioning and provenance policy

## Immutable-in-meaning origin documents

An origin document is a dated file under `origins/`, or a file explicitly marked as a released version. Once published, it is never silently edited to change its substantive meaning. Typographical or broken-link corrections may be made only with a dated correction note explaining the change.

## How the record evolves

1. Add a new dated or semantic-versioned document.
2. State what changed, what remains, and why.
3. Link back to the earlier version rather than replacing it.
4. Tag material releases in Git.

Git history is part of the provenance record, but it is not a proof of authorship, novelty, or priority beyond what a public repository and its timestamps can reasonably show.

## Proposed release convention

`vYYYY.MM.DD` for dated records; `vMAJOR.MINOR.PATCH` for coherent publications. A future `CHANGELOG.md` will link each release to its preceding record.
