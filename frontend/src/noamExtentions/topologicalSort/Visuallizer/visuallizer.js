import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import "./visuallizer.css"; // Ensure CSS is applied


const Visualizer = ({ nodes, edges }) => {
    const svgRef = useRef();

    useEffect(() => {
        if (!nodes || !edges || nodes.length === 0) return;

        const width = 800;
        const height = 700;

        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove(); // Clear previous graph

        // **Step 1: Create a Grid Layout for Nodes**
        const numNodes = nodes.length;
        const numCols = Math.ceil(Math.sqrt(numNodes));
        const numRows = Math.ceil(numNodes / numCols);

        const nodeSpacingX = width / (numCols + 1);
        const nodeSpacingY = height / (numRows + 1);

        let formattedNodes = nodes.map((node, index) => ({
            id: typeof node === "string" ? node : node.id,
            x: (index % numCols) * nodeSpacingX + nodeSpacingX / 2,
            y: Math.floor(index / numCols) * nodeSpacingY + nodeSpacingY / 2,
            fx: (index % numCols) * nodeSpacingX + nodeSpacingX / 2, // Fix X position
            fy: Math.floor(index / numCols) * nodeSpacingY + nodeSpacingY / 2  // Fix Y position
        }));

        // **Step 2: Ensure Edges Reference Correct Nodes**
        let formattedEdges = edges
            .map((edge) => {
                const sourceNode = formattedNodes.find((n) => n.id === edge.start);
                const targetNode = formattedNodes.find((n) => n.id === edge.end);
                if (!sourceNode || !targetNode) {
                    console.error("Edge references missing node:", edge);
                    return null;
                }
                return { source: sourceNode, target: targetNode };
            })
            .filter((edge) => edge !== null);

        // **Step 3: Setup D3 Simulation (Fixed Positions)**
        const simulation = d3
            .forceSimulation(formattedNodes)
            .force("link", d3.forceLink(formattedEdges).id((d) => d.id).distance(80))
            .force("charge", d3.forceManyBody().strength(-50))
            .force("x", d3.forceX((d) => d.fx).strength(1)) // Fix X position
            .force("y", d3.forceY((d) => d.fy).strength(1)) // Fix Y position
            .alpha(0.1)
            .alphaDecay(0);

        // **Step 4: Draw Edges**
        const link = svg
            .selectAll("line")
            .data(formattedEdges)
            .enter()
            .append("line")
            .attr("class", "edge");

        // **Step 5: Draw Nodes**
        const node = svg
            .selectAll("circle")
            .data(formattedNodes)
            .enter()
            .append("circle")
            .attr("class", "node")
            .attr("r", 20);

        // **Step 6: Draw Labels**
        const text = svg
            .selectAll("text")
            .data(formattedNodes)
            .enter()
            .append("text")
            .attr("class", "node-label")
            .attr("dy", -25)
            .text((d) => d.id);

        // **Step 7: Update Positions on Simulation Tick**
        simulation.on("tick", () => {
            link
                .attr("x1", (d) => d.source.x)
                .attr("y1", (d) => d.source.y)
                .attr("x2", (d) => d.target.x)
                .attr("y2", (d) => d.target.y);

            node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
            text.attr("x", (d) => d.x).attr("y", (d) => d.y);
        });

    }, [nodes, edges]);

    return (
        <div className="visualizer-container">
            <svg ref={svgRef} width={800} height={700}></svg>
        </div>
    );
};

export default Visualizer;