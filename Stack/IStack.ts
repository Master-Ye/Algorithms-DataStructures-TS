import { IList } from "../types/List";
interface IStack<T> extends IList<T> {
  push(element: T): void;
  pop(): T | undefined;
}
export default IStack;
