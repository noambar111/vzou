import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import "./visuallizer.css";

const Visualizer = ({ nodes, edges }) => {

    const [fromhDfsV, setFromhDfsV] = useState(0);
    const [finishDFS, setFinishDfs] = useState(0);
    const [finishDFSVISIT, setFinishDfsVISIT] = useState(0);
    const [nodeIdx, setNodeIdx] = useState(0);
    const [neighborNodeIdx, setNeighborNodeIdx] = useState(0);
    const [neighborNodeSize, setNeighborNodeSize] = useState(0);
    const [d_array, setDARRAY] = useState(new Array(nodes.length).fill(0));
    const [f_array, setFARRAY] = useState(new Array(nodes.length).fill(0));
    const [pi_array, setPIARRAY] = useState(new Array(nodes.length).fill(0));
    const [c_array, setCARRAY] = useState(new Array(nodes.length).fill(0));
    const [activeLine, setActiveLine] = useState({ section: "DFS", index: 0 });
    const [time, setTime] = useState(0);
    const [stack, setStack] = useState([]);

    const push = (nodeIdx, neighborNodeIdx) => {
        setStack(prevStack => [...prevStack, { nodeIdx, neighborNodeIdx }]);
    };
    
    const pop = () => {
        setStack(prevStack => prevStack.slice(0, -1));
    };
    
    const peek = () => {
        return stack.length > 0 ? stack[stack.length - 1] : null;
    };
    
    const isEmpty = () => {
        return stack.length === 0;
    };

    const nodeMapping = nodes.reduce((acc, node, index) => {
        acc[node] = index + 1; 
        return acc;
    }, {});

    console.log("nodeMapping  " + nodeMapping[0]);
    const nodesId = nodes.map((_, index) => index + 1);


    const adjacencyList = Array(nodes.length + 1).fill(null).map(() => []);

    edges.forEach(({ start, end }) => {
    const startIndex = nodeMapping[start];
    const endIndex = nodeMapping[end];

    adjacencyList[startIndex].push(endIndex);
    });

    const nextStepp = () => {
        console.log(nodes.length);
        if((activeLine.index == 0) && (activeLine.section === "DFS"))
        {
            if(nodeIdx===0)
            {
                setActiveLine({section:"DFS", index:activeLine.index +1});
            }
            else
            {
                alert("finish  running the algorithm.");
            }
            return;
        }
        if((activeLine.index == 1) && (activeLine.section === "DFS"))
        {
            if( nodeIdx < nodes.length)
            {
                setActiveLine({section:"DFS", index:activeLine.index +1});
            }
            else {
                setActiveLine({section:"DFS", index:6});
                setNodeIdx(0);
            }
            return;

        }
        if((activeLine.index == 2) && (activeLine.section === "DFS"))
        {
            const prevD = [...d_array];
            prevD[nodeIdx] = -1;
            setDARRAY(prevD);
            setActiveLine({section:"DFS", index:activeLine.index +1});
            return;
        }
        if((activeLine.index == 3) && (activeLine.section === "DFS"))
        {
            console.log(f_array);

            const prevF = [...f_array];
            prevF[nodeIdx] = -1;
            setFARRAY(prevF);
            setActiveLine({section:"DFS", index:activeLine.index +1});
            return;
        }
        if((activeLine.index == 4) && (activeLine.section === "DFS"))
        {
            const prevC = [...c_array];
            prevC[nodeIdx] = "WHITE";
            setCARRAY(prevC);
            setActiveLine({section:"DFS", index:activeLine.index +1});
            return;
        }
        if((activeLine.index == 5) && (activeLine.section === "DFS"))
        {
            const prevPI = [...pi_array];
            prevPI[nodeIdx] = -1;
            setPIARRAY(prevPI);
            setNodeIdx(nodeIdx + 1);
            setActiveLine({section:"DFS", index: 1});
            return;
        }
        if((activeLine.index == 6) && (activeLine.section === "DFS"))
        {
            console.log("activeLine.index   " + activeLine.index);
            if( nodeIdx < nodes.length)
            {
                setActiveLine({section:"DFS", index:7});
            }
            else {
                setActiveLine({section:"DFS", index:0});
            }
            return;
        }
        if((activeLine.index == 7) && (activeLine.section === "DFS"))
        {
            if( c_array[nodeIdx] === "WHITE" )
            {
                setActiveLine({section:"DFS", index:8});
            }
            else {
                setNodeIdx(nodeIdx+1);
                setActiveLine({section:"DFS", index:6});
            }
            return;
        }
        if((activeLine.index == 8) && (activeLine.section === "DFS"))
        {
            if(fromhDfsV == 2)
            {
                setActiveLine({section:"DFS", index:6});
                setFromhDfsV(0);
            }
            else
            {
                setActiveLine({section:"DFS-VISIT", index:0});
                return;
            }
        }
        if((activeLine.index == 0) && (activeLine.section === "DFS-VISIT"))
        {
            setActiveLine({section:"DFS-VISIT", index:1});
            return;
        }
        if((activeLine.index == 1) && (activeLine.section === "DFS-VISIT"))
        {
            setTime(time+1);
            setActiveLine({section:"DFS-VISIT", index:2});
            return;
        }
        if((activeLine.index == 2) && (activeLine.section === "DFS-VISIT"))
        {
            const prevD = [...d_array];
            prevD[nodeIdx] = time;
            setDARRAY(prevD);
            setActiveLine({section:"DFS-VISIT", index:3});
            return;
        }
        if((activeLine.index == 3) && (activeLine.section === "DFS-VISIT"))
        {
            const prevC = [...c_array];
            prevC[nodeIdx] = "GRAY";
            setCARRAY(prevC);
            setActiveLine({section:"DFS-VISIT", index:4});
            setNeighborNodeIdx(0);
            return;
        }
        if((activeLine.index == 4) && (activeLine.section === "DFS-VISIT"))
        {
            const currentNodeId = nodesId[nodeIdx];
            if(neighborNodeIdx < adjacencyList[currentNodeId].length)
            {
                setActiveLine({section:"DFS-VISIT", index:5});
            }
            else
            {
                setActiveLine({section:"DFS-VISIT", index:8});                
            }
            return;
        }
        if((activeLine.index == 5) && (activeLine.section === "DFS-VISIT"))
        {
            setFromhDfsV(0);
            const currentNodeId = nodesId[nodeIdx];
            if(adjacencyList[currentNodeId][neighborNodeIdx] == "WHITE")
            {
                push(nodeIdx, neighborNodeIdx);
                setNodeIdx(neighborNodeIdx);
                setActiveLine({section:"DFS-VISIT", index:6});
            }
            else
            {
                setNeighborNodeIdx(neighborNodeIdx+1);
                setActiveLine({section:"DFS-VISIT", index:4});
            }
            return;
        }
        if((activeLine.index == 6) && (activeLine.section === "DFS-VISIT"))
        {
            const prevpi = [...pi_array];
            prevpi[neighborNodeIdx] = nodeIdx;
            setPIARRAY(prevpi);
            setActiveLine({section:"DFS-VISIT", index:7});
            return;
        }
        if((activeLine.index == 7) && (activeLine.section === "DFS-VISIT"))
        {
            if(fromhDfsV)
            {
                setActiveLine({section:"DFS-VISIT", index:4});
            }
            else
            {
                setActiveLine({section:"DFS-VISIT", index:0});
            }
            return;
        }
        if((activeLine.index == 8) && (activeLine.section === "DFS-VISIT"))
        {
            setTime(time+1);
            setActiveLine({section:"DFS-VISIT", index:9});
            return;
        }
        if((activeLine.index == 9) && (activeLine.section === "DFS-VISIT"))
        {
            const prevC = [...c_array];
            prevC[nodeIdx] = "BLACK";
            setCARRAY(prevC);
            setActiveLine({section:"DFS-VISIT", index:10});
            return;
        }
        if((activeLine.index == 10) && (activeLine.section === "DFS-VISIT"))
        {
            const prevF = [...f_array];
            prevF[nodeIdx] = time;
            setFARRAY(prevF);
            if(isEmpty())
            {
                setFinishDfsVISIT(1);
                setActiveLine({section:"DFS", index:8});
                setFromhDfsV(2);
                console.log("finish")
            }
            else
            {
                setFinishDfsVISIT(0);
                setActiveLine({section:"DFS-VISIT", index:7});
                nodeIdx, nnidx = pop();
                setNeighborNodeIdx(nnidx);
                setNodeIdx(nidx);
                setFromhDfsV(1);
            }

            return;
        }

    }

    console.log("nodes - " + nodes) ;
    console.log("edges - " + edges);
    const svgRef = useRef();
    const dfsCode = [
        "DFS(G):",
        "    for each vertex u in G:",
        "        d[u] = - ;",
        "        f[u] = - ;",
        "        c[u] = white ;",
        "        PI[u] = NIL ;",
        "    for each vertex u in G:",
        "        if c[u] == \"WHITE\":",
        "            DFS-VISIT(G, u)"
    ];

    const dfsVisitCode = [
        "DFS-VISIT(G, u):",
        "    time = time + 1;",
        "    d[u] = time;",
        "    c[u] = \"GRAY\";",
        "    for each neighbor v of u in G:",
        "        if c[v] == \"WHITE\":",
        "            PI[v] = u;",
        "            DFS-VISIT(G, v);",
        "    time = time + 1;",
        "    c[u] = \"BLACK\";",
        "    f[u] = time;",
    ];

    function startDFS() {
        const unvisitedNodes = nodes.filter(n => !visitedNodes.has(n));
        if (unvisitedNodes.length > 0) {
            const startNode = unvisitedNodes[0]; 
            setStack([startNode]);
            return { section: "DFS-VISIT", index: 0 };
        }
        return { section: "DFS", index: 0 };
    }

    function processNextNode() {
        if (stack.length === 0) {
            return { section: "DFS", index: 0 }; 
        }

        const newStack = [...stack];
        const node = newStack.pop(); 
        setStack(newStack);
        setVisitedNodes((prev) => new Set(prev).add(node));

        const unvisitedNeighbors = edges
            .filter(e => e.start === node && !visitedNodes.has(e.end))
            .map(e => e.end);

        newStack.push(...unvisitedNeighbors);
        setStack(newStack);

        return { section: "DFS-VISIT", index: 0 };
    }
    function highlightLine(index) {
        setActiveLine(index);
        setTimeout(() => setActiveLine(null), 1000); 
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
            <div className=".code_button-wrapper">
                <div className="code-wrapper">
                    <div className="code-container">
                        <pre>
                            {dfsCode.map((line, index) => (
                                <div
                                    key={`DFS-${index}`}
                                    className={`code-line ${activeLine.section === "DFS" && activeLine.index === index ? "active-line" : ""}`}
                                >
                                    <span className="line-number">{index + 1}</span>
                                    <span>{line}</span>
                                </div>
                            ))}
                        </pre>
                    </div>
                    <div className="code-container">
                        <pre>
                            {dfsVisitCode.map((line, index) => (
                                    <div
                                        key={`DFS-VISIT-${index}`}
                                        className={`code-line ${activeLine.section === "DFS-VISIT" && activeLine.index === index ? "active-line" : ""}`}
                                    >
                                        <span className="line-number">{dfsCode.length + 1 + index}</span>
                                        <span>{line}</span>
                                    </div>
                                ))}
                        </pre> 
                    </div> 
                </div>
                <button onClick={nextStepp} className="next-step-button">
                    Next Step
                </button>
              
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Node</th>
                            <th>d_array</th>
                            <th>c_array</th>
                            <th>f_array</th>
                            <th>pi_array</th>
                        </tr>
                    </thead>
                    <tbody>
                        {d_array.map((value, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td> {/* מספר הצומת */}
                                <td>{d_array[index]}</td>
                                <td>{c_array[index]}</td>
                                <td>{f_array[index]}</td>
                                <td>{pi_array[index]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        </>
    );
};

export default Visualizer;