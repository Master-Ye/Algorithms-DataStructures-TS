import { ArrayStack } from "./栈结构";
function decToBin(decimal: number): string {
  const stack = new ArrayStack();
  while (decimal != 0) {
    stack.push(decimal % 2);
    decimal = Math.floor(decimal / 2);
  }
  let result = "";
  while (!stack.isEmpty()) {
    result += stack.pop();
  }
  return result;
}
