import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import "./visuallizer.css";

const Visualizer = ({ nodes, edges }) => {
    const svgRef = useRef();
    const dfsPseudoCode = [
        "DFS(G):",
        "    for each vertex u in G:",
        "        if u is not visited:",
        "            DFS-VISIT(G, u)",
        "",
        "DFS-VISIT(G, u):",
        "    mark u as visited",
        "    for each neighbor v of u in G:",
        "        if v is not visited:",
        "            DFS-VISIT(G, v)"
    ];
    const [activeLine, setActiveLine] = useState(null);
    function highlightLine(index) {
        setActiveLine(index);
        setTimeout(() => setActiveLine(null), 1000); // מסיר הדגשה אחרי שנייה
    }

    useEffect(() => {
        if (!nodes || !edges || nodes.length === 0) return;

        const width = 800;
        const height = 700;

        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        const defs = svg.append("defs");
        defs.append("marker")
            .attr("id", "arrowhead")
            .attr("viewBox", "0 -5 10 10")
            .attr("refX", 18)
            .attr("refY", 0)
            .attr("markerWidth", 6)
            .attr("markerHeight", 6)
            .attr("orient", "auto")
            .append("path")
            .attr("d", "M0,-5L10,0L0,5")
            .attr("fill", "#4A90E2");


        const numCols = Math.ceil(Math.sqrt(nodes.length));
        const numRows = Math.ceil(nodes.length / numCols);
        const xSpacing = width / (numCols + 1);
        const ySpacing = height / (numRows + 1);

        let formattedNodes = nodes.map((node, index) => ({
            id:  node ,
            x: (index % numCols) * xSpacing + xSpacing / 2,
            y: Math.floor(index / numCols) * ySpacing + ySpacing / 2,
            t: index + 1
        }));

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

            const outgoingEdges = {};
            formattedEdges.forEach(edge => {
                if (!outgoingEdges[edge.source.id]) {
                    outgoingEdges[edge.source.id] = [];
                }
                outgoingEdges[edge.source.id].push(edge);
            });

            formattedEdges.forEach(edge => {
                const edgesFromSource = outgoingEdges[edge.source.id];
                edge.edgeIndex = edgesFromSource.indexOf(edge);
                edge.totalEdges = edgesFromSource.length;
            });

            const getCurveOffset = (edgeIndex, totalEdges) => {
                const spread = 30; 
                console.log("getCurveOffset  " + totalEdges  )
                return ((edgeIndex - (totalEdges - 1) / 2)+1) * spread;
            };
            
            
            

            svg.selectAll(".edge")
            .data(formattedEdges)
            .enter()
            .each(function (d) {
                const isSkippingColumn = Math.abs(d.source.x - d.target.x) >= xSpacing;
                const isSkippingRow = Math.abs(d.source.y - d.target.y) >= ySpacing;
                const curveOffset = getCurveOffset(d.edgeIndex, d.totalEdges);
        
                let edge;
                if (isSkippingColumn || isSkippingRow) {
                    edge = d3.select(this)
                        .append("path")
                        .attr("d", () => {
                            let midX = (d.source.x + d.target.x) / 2;
                            let midY = (d.source.y + d.target.y) / 2;
        
                            if (isSkippingColumn) {
                                midY -= curveOffset * 1.5;
                            }
                            if (isSkippingRow) {
                                midX += curveOffset * 1.5;
                            }
        
                            return `M ${d.source.x},${d.source.y} Q ${midX},${midY} ${d.target.x},${d.target.y}`;
                        })
                        .attr("stroke", "#4A90E2")
                        .attr("stroke-width", "4")
                        .attr("fill", "none")
                        .attr("class", "graph-edge")
                        .attr("marker-end", "url(#arrowhead)");
                } else {
                    edge = d3.select(this)
                        .append("line")
                        .attr("x1", d.source.x)
                        .attr("y1", d.source.y)
                        .attr("x2", d.target.x)
                        .attr("y2", d.target.y)
                        .attr("stroke", "#4A90E2")
                        .attr("stroke-width", "4")
                        .attr("stroke-linecap", "round")
                        .attr("class", "graph-edge")
                        .attr("marker-end", "url(#arrowhead)");
                }
        
                edge.on("mouseover", function () {
                    d3.select(this)
                        .attr("stroke", "#ff5733") 
                        .attr("stroke-width", "6");
                });
        
                edge.on("mouseout", function () {
                    d3.select(this)
                        .attr("stroke", "#4A90E2") 
                        .attr("stroke-width", "4");
                });
            });

        svg.selectAll(".node")
            .data(formattedNodes)
            .enter()
            .append("circle")
            .attr("cx", (d) => d.x)
            .attr("cy", (d) => d.y)
            .attr("r", 20)
            .attr("fill", "green")
            .attr("stroke", "black")
            .attr("stroke-width", 2);

        svg.selectAll(".node-label")
            .data(formattedNodes)
            .enter()
            .append("text")
            .attr("x", (d) => d.x)
            .attr("y", (d) => d.y)
            .attr("text-anchor", "middle")
            .attr("font-size", "14px")
            .attr("fill", "white")
            .text((d) => "N" + d.t);

    }, [nodes, edges]);

    return (
        <>
        <div className="abstract-container">
            <div className="visualizer-container">
                <svg ref={svgRef} width={800} height={700} style={{ border: "1px solid black" }}></svg>
            </div>
            <div className="code-container">
            <pre>
                {dfsPseudoCode.map((line, index) => (
                    <div 
                        key={index} 
                        className={`code-line ${activeLine === index ? "active-line" : ""}`}
                    >
                        <span className="line-number">{index + 1}</span>
                        <span>{line}</span>
                    </div>
                ))}
            </pre>
        </div>
        </div>
        </>
    );
};

export default Visualizer;