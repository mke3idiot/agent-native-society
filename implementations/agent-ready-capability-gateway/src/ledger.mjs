export class EvidenceLedger {
  #events = [];

  append(type, data, now = new Date()) {
    const event = Object.freeze({
      sequence: this.#events.length + 1,
      type,
      at: now.toISOString(),
      data: Object.freeze({ ...data })
    });
    this.#events.push(event);
    return event;
  }

  all() {
    return this.#events.slice();
  }
}
