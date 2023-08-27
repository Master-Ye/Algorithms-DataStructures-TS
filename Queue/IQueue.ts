import { IList } from "../types/List";
interface IQueue<T> extends IList<T> {
  enqueue(item: T): void;
  dequeue(): T | undefined;
}
