class MemoryStore {
  private store: Record<string, unknown> = {};

  set(key: string, value: unknown) {
    this.store[key] = value;
  }

  get(key: string): unknown {
    return this.store[key];
  }

  getAll(): Record<string, unknown> {
    return this.store;
  }
}

export const memoryStore = new MemoryStore();