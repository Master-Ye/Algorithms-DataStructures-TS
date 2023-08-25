class ArrayQueue<T> {
  private data: T[] = [];
  enqueue(item: T) {
    this.data.push(item);
  }
  dequeue(): T | undefined {
    return this.data.shift();
  }
  peek(): T | undefined {
    return this.data[0];
  }

  isEmpty(): boolean {
    return this.data.length === 0;
  }

  size(): number {
    return this.data.length;
  }
  ///queue.size
}
export {ArrayQueue}