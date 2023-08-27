//1 node节点类
class Node<T> {
  value: T;
  next: Node<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

//2LinkList

class LinkList<T> {
  head: Node<T> | null = null;

  size: number = 0;

  get length(): number {
    return this.size;
  }
  // 添加节点
  append(value: T) {
    const newNode = new Node(value);
    if (this.head === null) this.head = newNode;
    else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = newNode;
      newNode.next = null;
    }
    this.size++;
  }
  traverse(): void {
    //遍历
    let current = this.head;
    while (current != null) {
      console.log(current.value);
      current = current.next;
    }
  }
  insert(value: T, position: number): boolean {
    if (position < 0 || position > this.size) return false;
    const newNode = new Node(value);
    let current = this.head;
    if (position === 0) {
      newNode.next = current;
      this.head = newNode;
    } else {
      let index = 0;
      while (index < position) {
        current = current!.next;
        index++;
      }
      newNode.next = current!.next;
      current!.next = newNode;
    }
    return true;
  }
  checkPosition(position: number): boolean {
    return !(position < 0 || position > this.size);
  }
  removeAT(position: number): T | null {
    if (position < 0 || position > this.size) return null;
    if (position === 0) {
      this.head = this.head?.next ?? null;
    } else {
      let current = this.head;
      let previous: Node<T> | null = null;
      let index = 0;
      while (index++ < position && current) {
        previous = current;
        current = current.next;
      }
      previous!.next = current?.next ?? null;
    }
    this.size--;
    return null;
  }

  get(position: number): T | null {
    if (!this.checkPosition(position)) return null;
    let current = this.head;
    let index = 0;
    while (index++ < position && current) {
      current = current.next;
    }
    return current?.value ?? null;
  }
}

export {};
