class Graph<T> {
  //图
  private verteces: T[] = []; //顶点

  private adjList: Map<T, T[]> = new Map(); //邻接表

  addVertex(v: T) {
    this.verteces.push(v);
    this.adjList.set(v, []);
  }
  addEdge(a: T, b: T) {
    this.adjList.get(a)?.push(b);
    this.adjList.get(b)?.push(a);
  }
  traverse() {
    console.log("Graph content:");
    this.verteces.forEach((v) => {
      const edges = this.adjList.get(v);
      console.log(`${v} -> ${edges?.join(" ")}`);
    });
  }

  bfs() {
    if (this.verteces.length === 0) return;
    const queue: T[] = [];
    queue.push(this.verteces[0]);
    const visited = new Set<T>();
    visited.add(this.verteces[0]);
    while (queue.length) {
      const v = queue.shift()!;
      console.log(v);
      const edges = this.adjList.get(v);
      edges?.forEach((v) => {
        if (!visited.has(v)) {
          queue.push(v);
          visited.add(v);
        }
      });
    }
  }
  dfs() {
    if (this.verteces.length === 0) return;
    const stack: T[] = [];
    stack.push(this.verteces[0]);
    const visited = new Set<T>();
    while (stack.length) {
      const v = stack.pop()!;
      console.log(v);
      const edges = this.adjList.get(v);
      if (!edges) continue;
      for (let i = edges.length - 1; i >= 0; i--) {
        const v = edges[i];
        if (!visited.has(v)) {
          stack.push(v);
          visited.add(v);
        }
      }
    }
  }
}
const graph = new Graph<number>();
