import { hashFunc } from "./hashFunc";
class HashTable<T = any> {
  private storage: [string, any][][] = [];
  private length: number = 7;
  private count: number = 0;
  /**
   * put
   */

  public put(key: string, value: T) {
    const index = this.hashFunc(key, this.length);
    let bucker = this.storage[index];
    if (!bucker) {
      bucker = [];
      this.storage[index] = bucker;
    }
    let updated = false;
    for (let i = 0; i < bucker.length; i++) {
      const tuple = bucker[i];
      if (tuple[0] === key) {
        tuple[1] = value;
        updated = true;
        return;
      }
    }
    if (!updated) {
      bucker.push([key, value]);
      this.count++;
      const loadFactor = this.count / this.length;
      if (loadFactor > 0.75) {
        this.resize(this.length * 2);
      }
    }
  }
  get(key: string): T | null {
    const index = this.hashFunc(key, this.length);
    const bucker = this.storage[index];
    if (!bucker) return null;
    for (let i = 0; i < bucker.length; i++) {
      const tuple = bucker[i];
      if (tuple[0] === key) {
        return tuple[1];
      }
    }
    return null;
  }
  delete(key: string): T | null {
    const index = this.hashFunc(key, this.length);
    const bucker = this.storage[index];
    if (!bucker) return null;
    for (let i = 0; i < bucker.length; i++) {
      const tuple = bucker[i];
      if (tuple[0] === key) {
        bucker.splice(i, 1);
        this.count--;
        const loadFactor = this.count / this.length;
        if (loadFactor < 0.25 && this.length > 7) {
          this.resize(Math.floor(this.length / 2));
        }
        return tuple[1];
      }
    }
    return null;
  }
  private resize(newLength: number) {
    this.length = newLength;
    const oldStorage = this.storage;
    this.storage = [];
    this.count = 0;
    for (let i = 0; i < oldStorage.length; i++) {
      const bucker = oldStorage[i];
      if (!bucker) continue;
      for (let j = 0; j < bucker.length; j++) {
        const tuple = bucker[j];
        this.put(tuple[0], tuple[1]);
      }
    }
  }
  hashFunc(key: string, max: number): number {
    let hashCode: number = 0;
    const length = key.length;
    for (let i = 0; i < length; i++) {
      hashCode = 31 * hashCode + key.charCodeAt(i); //霍纳算法
    }
    const index = hashCode % max;
    return index;
  }
}
const hashTable = new HashTable();
