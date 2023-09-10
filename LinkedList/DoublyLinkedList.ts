import { LinkedList } from "./LinkedList";
import { DoublyNode } from "./LinkedNode";

class DoublyLinkedList<T> extends LinkedList<T> {
  head: DoublyNode<T> | null = null;
  tail: DoublyNode<T> | null = null;
  append(value: T): void {
    const newNode = new DoublyNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  } //开头
  prepend(value: T) {
    const newNode = new DoublyNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head!.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  } //结尾
  postTraverse() {
    const values: T[] = [];
    let current = this.tail;
    while (current) {
      values.push(current.value);
      current = current.prev;
    }
    console.log(values.join("->"));
  }
  insert(value: T, position: number): boolean {
    if (position < 0 || position > this.size) return false;
    const newNode = new DoublyNode(value);
    if (position === 0) {
      this.append(value);
      return true;
    } else if (position === this.size) {
      this.prepend(value);
      return true;
    } else {
      const newNode = new DoublyNode(value);
      const current = this.get(position) as DoublyNode<T>;
      current!.prev!.next = newNode;
      newNode.prev = current!.prev;
      newNode.next = current;
      current!.prev = newNode;
      this.size++;
      return true;
    }
  }
  removeAT(position: number): T | null {
    if (position < 0 || position > this.size - 1) return null;
    let current = this.head;
    if (position === 0) {
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head!.next;
        this.head!.prev = null;
      }
    } else if (position === this.size - 1) {
      current = this.tail;
      this.tail = this.tail!.prev;
      this.tail!.next = null;
    } else {
      current = this.get(position) as DoublyNode<T>;
      current!.prev!.next = current!.next;
      current!.next!.prev = current!.prev;
    }
    this.size--;
    return current?.value ?? null;
  }
}
