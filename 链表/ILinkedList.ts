interface ILinkedList<T> {
  append(value: T): void;
  traverse(): void;
  insert(value: T, position: number): boolean;
  checkPosition(position: number): boolean;
  removeAT(position: number): T | null;
  get(position: number): T | null;
  update(value: T, position: number): boolean;
  indexOf(value: T): number;
  remove(value: T): boolean;
  isEmpty(): boolean;
  size(): number;
}
