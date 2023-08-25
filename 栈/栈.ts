import IStack from "./IStack";

class ArrayStack<T = any> implements IStack<T>{
  private data: T[] = [];
  //push
  push(element: T): void {
    this.data.push(element);
  }
  //pop弹出 返回栈顶元素
  pop(): T | undefined {
    return this.data.pop();
  }
  //peek 返回栈顶元素
  peek(): T | undefined {
    return this.data[this.data.length - 1];
  }
  //isEmpty
  isEmpty(): boolean {
    return this.data.length === 0;
  }
  //size
  size(): number {
    return this.data.length;
  }
}
const stack1 = new ArrayStack<Number>();

// class LinkedStack<T> implements IStack<T> {
//   private data: T[] = [];
//   //push
//   push(element: T): void {}
//   //pop弹出 返回栈顶元素
//   pop(): T | undefined {}
//   //peek 返回栈顶元素
//   peek(): T | undefined {}
//   //isEmpty
//   isEmpty(): boolean {}
//   //size
//   size(): number {}
// }
//const stack2 = new LinkedStack<Number>();
export {ArrayStack};
