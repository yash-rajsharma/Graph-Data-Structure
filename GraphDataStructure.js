// Graph Data Structure:
// A Graph is a non-linear data structure that consists of a finite number of vertices (also called nodes) connected by edges.
// *Trees are a specific type of graph data structure.*

// Types of Graphs:
// 1. Directed Graph: A graph where edges have a direction, called directed edges. These edges are represented by arrows, indicating the direction in which the graph can be traversed.
// 2. Undirected Graph: A graph where edges are bidirectional. The graph can be traversed in either direction. The absence of arrows indicates that the graph is undirected.

// Representation of a Graph:
// 1. Adjacency Matrix: An adjacency matrix is a 2D array of size V x V where V is the number of vertices in the graph.
//    Each row and column represent a vertex.
//    If the value of any element matrix[i][j] is 1, it means there is an edge between vertex i and j.
//    Example: Given vertices A, B, and C where B is connected to A and C
//        B
//       / \
//      A   C
//    The matrix representation would look like:
//       __A__B__C_
//    A | 0  1  0
//    B | 1  0  1
//    C | 0  1  0

const matrix = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];

// console.log(matrix[1][0]); // Access matrix elements

// 2. Adjacency List: In this representation, vertices are stored in a map-like data structure,
//    and each vertex stores a list of its adjacent vertices.

// Example:
// A --> B
// B --> A, C
// C --> B

const adjacencyList = {
  A: ["B"],
  B: ["A", "C"],
  C: ["B"],
};

// console.log(adjacencyList["B"]); // Access adjacency list

// Pros and Cons of Adjacency List and Adjacency Matrix:
// - Adjacency List provides constant time complexity, O(1), for adding an edge.
// - Adjacency Matrix has linear time complexity, O(n), for edge lookups, depending on the size of the graph.
// - Adjacency List is more storage efficient, as only existing edges are stored. Adjacency Matrix stores values regardless of whether an edge exists, consuming more space.

// Let's create an Adjacency List-based Graph class.
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Adds a vertex to the graph.
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  // Adds an undirected edge between two vertices.
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  // Removes a vertex and its associated edges.
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return "NO Vertex found!!";
    }
    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  // Removes an edge between two vertices.
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2) &&
      this.adjacencyList[vertex2].delete(vertex1);
  }

  // Displays the graph as an adjacency list.
  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
    }
  }

  // Checks if an edge exists between two vertices.
  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }
}

// Instantiate the Graph class and add vertices and edges.
const graph = new Graph();

graph.addVertex("1");
graph.addVertex("2");
graph.addVertex("3");
graph.addVertex("4");
graph.addVertex("5");
graph.addVertex("6");
graph.addEdge("3", "1");
graph.addEdge("3", "4");
graph.addEdge("4", "2");
graph.addEdge("4", "5");
graph.addEdge("1", "2");
graph.addEdge("1", "0");
graph.addEdge("0", "2");
graph.addEdge("6", "5");
// console.log(graph.adjacencyList); // Display the adjacency list structure

// Breadth-First Search (BFS) traversal function.
function bfs(graph, startVertex) {
  const visited = new Set(); // Track visited vertices
  const queue = [startVertex]; // Initialize with starting vertex
  const result = []; // Store traversal order

  visited.add(startVertex);
  while (queue.length > 0) {
    const vertex = queue.shift(); // Process the next vertex in queue
    result.push(vertex);
    for (let neighbor of graph.adjacencyList[vertex]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  return result;
}

// Depth-First Search (DFS) traversal function.
function dfs(graph, startVertex, visited = new Set(), result = []) {
  visited.add(startVertex);
  result.push(startVertex);

  for (const neighbor of graph.adjacencyList[startVertex]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited, result);
    }
  }
  return result;
}

// console.log(dfs(graph, '5'));      // Perform DFS from vertex '5'
// console.log(graph.hasEdge("1", "2")); // Check if edge exists between '1' and '2'
console.log(graph.removeVertex("3")); // Remove vertex '3' and display result
console.log(graph.display()); // Display the final adjacency list
