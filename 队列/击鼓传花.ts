import { ArrayQueue } from "./队列";
function foo(names: string[], num: number): string | undefined {
  if (names.length === 0) return undefined;
  const queue = new ArrayQueue<string>();
  for (const name of names) {
    queue.enqueue(name);
  }
  while (queue.size() > 1) {
    for (let i = 1; i < num; i++) {
      queue.enqueue(queue.dequeue()!);
    }
    queue.dequeue();
  }
  return queue.peek();
}
const leftName = foo(["a", "b", "c", "d", "e"], 3);
console.log(leftName);
