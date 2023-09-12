class Heap<T> {
  private data: T[] = [];
  private length: number = 0;
  private swap(i: number, j: number) {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }
  insert(value: T) {
    this.data.push(value);
    this.length++;
    let index = this.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    while (index > 0) {
      if (this.data[index] <= this.data[parentIndex]) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }
  isEmpty(): boolean {
    return this.length === 0;
  }
  peek(): T | undefined {
    return this.data[0];
  }
  size(): number {
    return this.length;
  }
  buildHeap(arr: T[]) {}
  extract(): T | undefined {
    return undefined;
  }
}
