class Graph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
      return true
    }
    return false
  }
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      if (
        this.adjacencyList[vertex1].find(x => x === String(vertex2)) ||
        this.adjacencyList[vertex2].find(x => x === String(vertex1))
      ) {
        console.log('Edge already exists')
        return false
      }
      this.adjacencyList[vertex1].push(String(vertex2))
      this.adjacencyList[vertex2].push(String(vertex1))
      return true
    }
    return false
  }
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      if (
        !(
          this.adjacencyList[vertex1].some(v => v === vertex2) ||
          this.adjacencyList[vertex2].some(v => v === vertex1)
        )
      )
        return false

      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        v => v !== vertex2,
      )
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        v => v !== vertex1,
      )
      return true
    }
    return false
  }
  // removeVertex(vertex) {
  //   if (this.adjacencyList[vertex]) {
  //     for (let key in this.adjacencyList) {
  //       this.adjacencyList[key] = this.adjacencyList[key].filter(
  //         v => v !== vertex,
  //       )
  //     }
  //     delete this.adjacencyList[vertex]
  //     return true
  //   }
  //   return false
  // }
  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      while (this.adjacencyList[vertex].length) {
        let temp = this.adjacencyList[vertex].pop()
        this.removeEdge(vertex, temp)
      }
      delete this.adjacencyList[vertex]
      return this
    }
    return undefined
  }
}

let graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addEdge('A', 'C')
graph.addEdge('A', 'B')
graph.addEdge('B', 'D')
graph.addEdge('D', 'C')
graph.addEdge('D', 'A')
console.log(graph.removeVertex('D'))
console.log(graph)
