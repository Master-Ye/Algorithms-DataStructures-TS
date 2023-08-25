import { INode } from "../types/INode";
class TreeNode<T> extends INode<T> {
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;
}

class BSTree<T> {
  private root: TreeNode<T> | null = null;
  insert(value: T) {
    const newNode = new TreeNode<T>(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    this.insertNode(this.root, newNode);
  }
  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  preOrderTraverse() {
    this.preOrderTraverseNode(this.root);
  }
  private preOrderTraverseNode(node: TreeNode<T> | null) {
    if (node == null) {
      return;
    }
    console.log(node.value);
    this.preOrderTraverseNode(node.left);
    this.preOrderTraverseNode(node.right);
  }
  levelOrderTraverse() {
    if (!this.root) return;
    const queue: TreeNode<T>[] = [];
    queue.push(this.root);
    while (queue.length) {
      const node = queue.shift()!;
      console.log(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  getMaxValue(): T | null {
    let current = this.root;
    while (current && current.right) {
      current = current.right;
    }
    return current ? current.value : null;
  }
  search(value: T): boolean {
    let current = this.root;
    if (!current) return false;
    while (current) {
      if (current.value === value) {
        return true;
      } else if (current.value > value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
}

export { BSTree };
