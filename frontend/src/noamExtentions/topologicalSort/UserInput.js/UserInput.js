import React, { useState } from "react";
import "./UserInput.css";

const UserInput = ({ setInputData, setInputHasEntered }) => {
  const [numNodes, setNumNodes] = useState(0);
  const [edges, setEdges] = useState([]);

  const handleNumNodesChange = (value) => {
    const nodeCount = parseInt(value) || 0;
    if (nodeCount < 0) {
      alert("Number of nodes cannot be negative!");
      return;
    }
    setNumNodes(nodeCount);
  };

const handleEdgeChange = (index, field, value) => {
  const updatedEdges = [...edges];
  const newEdge = { ...updatedEdges[index], [field]: value.trim() };

  // Ensure both start and end nodes are selected before checking duplicates
  if (newEdge.start && newEdge.end) {
    // Check if the same edge already exists (excluding the current editing edge)
    const isDuplicate = edges.some((edge, idx) =>
      idx !== index && edge.start === newEdge.start && edge.end === newEdge.end
    );

    if (isDuplicate) {
      alert("This edge already exists! Please choose different nodes.");
      return;
    }
  }

  updatedEdges[index] = newEdge;
  setEdges(updatedEdges);
};

  const handleNumEdgesChange = (value) => {
    const edgeCount = parseInt(value) || 0;
    if (edgeCount < 0) {
      alert("Number of edges cannot be negative!");
    } else if (edgeCount > numNodes * (numNodes - 1)) {
      alert("Number of edges exceeds the maximum possible for a directed graph!");
    } else {
      const updatedEdges = Array(edgeCount)
        .fill({ start: "", end: "" })
        .map((_, idx) => edges[idx] || { start: "", end: "" });
      setEdges(updatedEdges);
    }
  };

  const hasCycle = (nodes, edges) => {
    // Step 1: Build the graph (Adjacency List) & calculate in-degree
    const adjList = {};
    const inDegree = {};
  
    nodes.forEach(node => {
      adjList[node] = [];
      inDegree[node] = 0;
    });
  
    edges.forEach(({ start, end }) => {
      adjList[start].push(end);
      inDegree[end]++;
    });
  
    // Step 2: Initialize a queue with nodes having in-degree 0
    const queue = Object.keys(inDegree).filter(node => inDegree[node] === 0);
  
    let count = 0; // Count of visited nodes
  
    // Step 3: Process nodes with in-degree 0
    while (queue.length > 0) {
      const node = queue.shift(); // Remove front of queue
      count++;
  
      adjList[node].forEach((neighbor) => {
        inDegree[neighbor]--;
        if (inDegree[neighbor] === 0) queue.push(neighbor);
      });
    }
  
    // Step 4: If we couldn't process all nodes, a cycle exists
    return count !== nodes.length;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const nodes = Array.from({ length: numNodes }, (_, i) => `Node ${i + 1}`);
  
    if (numNodes === 0 || edges.some((edge) => !edge.start || !edge.end)) {
      alert("Please fill in all fields!");
      return;
    }
  
    // Check for cycles before submitting
    if (hasCycle(nodes, edges)) {
      alert("The graph contains a cycle! Please remove circular dependencies.");
      return;
    }
  
    setInputData({ nodes, edges });
    setInputHasEntered(true);
  };

  return (
    <div className="page-container flex justify-center items-center h-screen bg-gray-100">
      <div className="form-container p-6 bg-green-50 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-green-700 mb-4">
          Topological Sort Input
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Number of Nodes:
            </label>
            <input
              type="number"
              value={numNodes}
              onChange={(e) => handleNumNodesChange(e.target.value)}
              placeholder="Enter number of nodes"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Number of Edges:
            </label>
            <input
              type="number"
              value={edges.length}
              onChange={(e) => handleNumEdgesChange(e.target.value)}
              placeholder="Enter number of edges"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="nodes-container mt-6">
        <h2 className="text-xl font-semibold mb-4">Nodes</h2>
        {Array.from({ length: numNodes }, (_, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow-md mb-4 flex items-center"
          >
            <label className="text-sm font-medium text-gray-700">
              {`Node ${index + 1}`}
            </label>
          </div>
        ))}
      </div>

      <div className="edges-container mt-6">
        <h2 className="text-xl font-semibold mb-4">Edges</h2>
        {edges.map((edge, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow-md mb-4 flex flex-col"
          >
            <h3 className="font-medium text-gray-700 mb-2">Edge {index + 1}</h3>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="text-sm font-medium text-gray-700">
                  Start Node:
                </label>
                <select
                  value={edge.start}
                  onChange={(e) => handleEdgeChange(index, "start", e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                >
                  <option value="">Select start node</option>
                  {Array.from({ length: numNodes }, (_, idx) => (
                    <option key={idx} value={`Node ${idx + 1}`}>
                      {`Node ${idx + 1}`}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <label className="text-sm font-medium text-gray-700">
                  End Node:
                </label>
                <select
                  value={edge.end}
                  onChange={(e) => handleEdgeChange(index, "end", e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                >
                  <option value="">Select end node</option>
                  {Array.from({ length: numNodes }, (_, idx) => (
                    <option key={idx} value={`Node ${idx + 1}`}>
                      {`Node ${idx + 1}`}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserInput;
