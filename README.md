# 🌐 Graph Data Structure in JavaScript

## 📘 Introduction
A **Graph** is a non-linear data structure made up of vertices (also called nodes) connected by edges. It’s used to model relationships in various real-world systems, such as social networks, road maps, and network connections.

Graphs are powerful tools for solving complex problems in computer science, from routing algorithms to web page rankings and social networks. 🌍

## 📊 Types of Graphs

1. **Directed Graph** ➡️: A graph in which edges have a specific direction, represented by arrows showing how the graph can be traversed.

2. **Undirected Graph** 🔄: A graph where edges are bidirectional, allowing traversal in both directions, represented without arrows.

## 📝 Graph Representations

There are two primary ways to represent a graph in code:

### 1. 📐 Adjacency Matrix
An adjacency matrix is a 2D array of size `V x V` (where `V` is the number of vertices). Each cell `(i, j)` holds a value (`1` or `0`) to indicate the presence of an edge between vertex `i` and vertex `j`.

**Example**:
Given vertices A, B, and C with the following connections:
- B is connected to A and C.

### 2. Adjacency List
An adjacency list is a map-like structure where each vertex has a list of its adjacent vertices. This approach is more memory-efficient for sparse graphs.

**Example**:
Given vertices A, B, and C:
- A is connected to B.
- B is connected to A and C.
- C is connected to B.

Adjacency list:
```javascript
const adjacencyList = {
  A: ["B"],
  B: ["A", "C"],
  C: ["B"]
};
```
## 🔧 Graph Operations

1. **Adding Vertices** ➕: `addVertex(vertex)` adds a new vertex to the graph if it doesn’t already exist.

2. **Adding Edges** 🔗: `addEdge(vertex1, vertex2)` adds an undirected edge between two vertices. This also automatically creates the vertices if they don’t exist.

3. **Removing Vertices** ❌: `removeVertex(vertex)` removes a vertex along with all its connected edges from the graph.

4. **Removing Edges** ✂️: `removeEdge(vertex1, vertex2)` removes an edge between two specified vertices.

5. **Displaying the Graph** 🖥️: `display()` logs the adjacency list structure, visualizing the connections for each vertex.

6. **Checking for Edges** 🔍: `hasEdge(vertex1, vertex2)` checks if there is an edge between two vertices, returning `true` or `false`.

---

## 🔄 Graph Traversal Algorithms

Graph traversal algorithms are essential for exploring or searching within a graph. Two primary traversal methods are **Breadth-First Search (BFS)** and **Depth-First Search (DFS)**.

### 🔹 Depth-First Search (DFS)
DFS explores as far down one branch as possible before backtracking to explore other branches. It’s useful for exploring all paths in scenarios like solving puzzles or maze-solving.

### 🔹Breadth-First Search (BFS)
BFS is a traversal method that explores all neighbors at the current level before moving on to nodes at the next level.

### 📌 Key Points

1. **Graphs** are powerful structures used to represent networks or relationships.

2. **Adjacency List**: Efficient storage for sparse graphs by storing only existing edges.

3. **Adjacency Matrix**: Suitable for dense graphs, storing every possible connection.

4. **BFS and DFS**: Core algorithms for graph traversal, with applications in pathfinding, social network analysis, and search operations.

5. **Applications**: Graphs are widely used in various fields, including computer networks, social networks, and geographic maps.

### 🏁 Conclusion
This guide provides a foundation for understanding graph structures and performing essential graph operations. Mastering graph theory and traversal algorithms enables tackling complex problems in areas like networking, recommendation systems, and pathfinding. 🌟
