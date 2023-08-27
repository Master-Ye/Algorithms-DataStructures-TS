import { LinkedList } from "./LinkedList";
class CircularLinkedList<T> extends LinkedList<T> {
  append(value: T): void {
    super.append(value);
    this.tail!.next = this.head;
  }
  insert(value: T, position: number): boolean {
    const isSuccess = super.insert(value, position);
    if (isSuccess && position === 0) {
    }
    if (isSuccess && position === this.size - 1) this.tail!.next = this.head;

    return isSuccess;
  }
  removeAT(position: number): T | null {
    const value = super.removeAT(position);
    if (value && (position === 0 || position === this.size))
      this.tail!.next = this.head;
    return value;
  }
}
