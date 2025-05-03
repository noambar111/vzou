import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAppSelector } from "../../store/hooks"; 
import { selectAuthentication } from "../../store/reducers/auth-reducer";
import FinalExam from "../finalExam/finalExam";
import "./LearningPath.css";

const questionTopics = [
    { topicId: 2, clusterId: 0, name: "Insertion Sort", demoLink: "/insertionsort", finalExam: "/quiz/insertion-sort-test", cx: 250, cy: 230, fill: "#FFC107", status: "unknown" },
    { topicId: 6, clusterId: 0, name: "Counting Sort", demoLink: "/countingsort", cx: 360, cy: 135, fill: "#4CAF50", status: "unknown" },
    { topicId: 10, clusterId: 0, name: "Quick Sort", demoLink: "/quicksort", cx: 450, cy: 110, fill: "#FFC107", status: "unknown" },
    { topicId: 9, clusterId: 0, name: "Merge Sort", demoLink: "/mergesort", cx: 470, cy: 30, fill: "#4CAF50", status: "unknown" },
    { topicId: 7, clusterId: 0, name: "Radix Sort", demoLink: "/radixsort", cx: 560, cy: 180, fill: "#FFC107", status: "unknown" },
    { topicId: 0, clusterId: 0, name: "Selection Sort", demoLink: "/", cx: 150, cy: 270, fill: "#FFC107", status: "unknown" },
    { topicId: 1, clusterId: 0, name: "Bubble Sort", demoLink: "/", cx: 150, cy: 50, fill: "#4CAF50", status: "unknown" },
    { topicId: 8, clusterId: 0, name: "Bucket Sort", demoLink: "/bucketsort", cx: 450, cy: 270, fill: "#4CAF50", status: "unknown" },
    { topicId: 5, clusterId: 1, name: "Linked List", demoLink: "/linkedlist", cx: 150, cy: 400, fill: "#4CAF50", status: "unknown" },
    { topicId: 11, clusterId: 1, name: "Binary Search Tree", demoLink: "/bst", cx: 340, cy: 435, fill: "#4CAF50", status: "unknown" },
    { topicId: 17, clusterId: 1, name: "AVL Tree", demoLink: "/avl", cx: 500, cy: 500, fill: "#4CAF50", status: "unknown" },
    { topicId: 4, clusterId: 1,name: "Queue", demoLink: "/queue", cx: 550, cy: 350, fill: "#4CAF50", status: "unknown" },
    { topicId: 15, clusterId: 1,name: "Heap", demoLink: "/heap", cx: 700, cy: 290, fill: "#4CAF50", status: "unknown" },
    { topicId: 21, clusterId: 2 ,name: "Prim", demoLink: "/prim", cx: 850, cy: 300, fill: "#4CAF50", status: "unknown" },
    { topicId: 13, clusterId: 2 ,name: "BFS", demoLink: "/bfs", cx: 710, cy: 375, fill: "#4CAF50", status: "unknown" },
    { topicId: 18, clusterId: 2 ,name: "Dijkstra's Algorithm", demoLink: "/djikstra", cx: 830, cy: 430, fill: "#4CAF50", status: "unknown" },
    { topicId: 22, clusterId: 3 ,name: "Knapsack", demoLink: "/knapsack", cx: 890, cy: 570, fill: "#4CAF50", status: "unknown" },
    { topicId: 23, clusterId: 3 ,name: "LCS", demoLink: "/lcs", cx: 890, cy: 670, fill: "#4CAF50", status: "unknown" },
    { topicId: 12, clusterId: 1 ,name: "Hash Table", demoLink: "/hashtable", cx: 300, cy: 500, fill: "#4CAF50", status: "unknown" },
    { topicId: 3, clusterId: 1,name: "Stack", demoLink: "/stack", cx: 250, cy: 630, fill: "#4CAF50", status: "unknown" },
    { topicId: 14, clusterId: 2 ,name: "DFS", demoLink: "/dfs", cx: 370, cy: 700, fill: "#4CAF50", status: "unknown" },
    { topicId: 16, clusterId: 2 ,name: "Topological Sort", demoLink: "/top-sort", cx: 500, cy: 750, fill: "#4CAF50", status: "unknown" },
    { topicId: 19, clusterId: 2 ,name: "Bellman-Ford", demoLink: "/bellman-ford", cx: 890, cy: 370, fill: "#4CAF50", status: "unknown" },
    { topicId: 20, clusterId: 2 ,name: "Kruskal's Algorithm", demoLink: "/kruskal", cx: 850, cy: 230, fill: "#4CAF50", status: "unknown" },
];

const topicMap = {
    0: "Selection Sort",
    1: "Bubble Sort",
    2: "Insertion Sort",
    3: "Stack",
    4: "Queue",
    5: "Linked List",
    6: "Counting Sort",
    7: "Radix Sort",
    8: "Bucket Sort",
    9: "Merge Sort",
    10: "Quick Sort",
    11: "Binary Search Tree",
    12: "Hash Table",
    13: "BFS",
    14: "DFS",
    15: "Heap",
    16: "Topological Sort",
    17: "AVL Tree",
    18: "Dijkstra's Algorithm",
    19: "Bellman-Ford",
    20: "Kruskal's Algorithm",
    21: "Prim",
    22: "Knapsack",
    23: "LCS",
};

const getStartsNum = (status) => {
    switch (status) {
        case 0:
            return "★"; 
        case 1:
            return "★★"; 
        case 2:
            return "★★★"; 
        case 3:
            return "🏆"; 
        default:
            return ""; 
    }
}

const getClusterColor = (clusterId) => {
    switch (clusterId) {
        case 0:
            return "#62808a"; 
        case 1:
            return "#946678"; 
        case 2:
            return "#d9417c"; 
        case 3:
            return "#491273"; 
        default:
            return ""; 
    }
}

const getStatusColor = (status) => {
    switch (status) {
        case 0:
            return "#5463a1"; // red for "memory level fail"
        case 1:
            return "#FFD700"; // Yellow for "memory level pass"
        case 2:
            return "#008000"; // green for complete
        default:
            return "#D3D3D3"; // grey for "Unknown"
    }
};

const LearningPath = () => {
    const [currentTopicId, setCurrentTopicId] = useState(null);
    const [finalFlag, setFinalFlag] = useState(false);
    const [hoveredCircle, setHoveredCircle] = useState(null);
    const [hoveredText, setHoveredText] = useState(null);
    const [topics, setTopics] = useState(questionTopics);
    const [showInfo, setShowInfo] = useState(true);
    const authSlice = useAppSelector(selectAuthentication);
    const toggleInfo = () => {
        setShowInfo(!showInfo);
    };
    
    const handleTextMouseEnter = (topic) => {
        setHoveredText(topic);
    };

    const handlePassedTheTest = () => {
        console.log("handlePassedTheTest");
        const tmpTopics = [...topics];
        const prevS = topics.find(topic => topic.topicId === currentTopicId)?.status

        const updatedTopics = tmpTopics.map((topic) =>
            topic.topicId === currentTopicId
                ? { ...topic, status: prevS + 1, fill: "#008000" } 
                : topic
        );
        setTopics(updatedTopics); 
        console.log(updatedTopics);
    };

    const handleTextMouseLeave = () => {
        setHoveredText(null);
    };

    const handleMouseEnter = (topic) => {
        setHoveredCircle(topic);
    };

    const handleMouseLeave = () => {
        setHoveredCircle(null);
    };

    const topicDependencies = {
        7: [6], // Radix
        15: [4], // Heap
        13: [4], // BFS
        20: [15], // Kruskal
        21: [15], // Prim
        19: [13], // Bellman-Ford
        18: [13], // Dijkstra 
        11: [5], // Binary Search Tree
        12: [5], // Hash Table
        17: [11], // AVL
        14: [3], // DFS 
        16: [14], // Topological Sort
    };

    const areDependenciesMet = (topicId, topics) => {
        const dependencies = topicDependencies[topicId] || [];
        for (let depId of dependencies) {
            const depTopic = topics.find((t) => t.topicId === depId);
            if (!depTopic || depTopic.status < 1) {
                // If any dependency has a status less than 1, return false
                return false;
            }
        }
        return true; // All dependencies are met
    };

    const handleFinalExam = (topic) => {
        console.log(topic);
        setCurrentTopicId(topic.topicId);
    
        if (topic.status === 3) {
            alert(`Well done! You have already completed the ${topic.name} topic!`);
            return;
        }
    
        if (!areDependenciesMet(topic.topicId, topics)) {
            alert(`You must achieve at least one star in the prerequisite topic(s) to unlock ${topic.name}.`);
            return;
        }
    
        setFinalFlag(true); // Proceed to the final exam
    };

    const userId = authSlice.user?.id; // Get user ID from authentication state

    useEffect(() => {
        const fetchTopicStatuses = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/user-progress/user/${userId}`);
                const topicsStatus = response.data;
                console.log(topicsStatus);


                // Process and update the topics state
                const updatedTopics = questionTopics.map((topic) => {
                    const matchedStatus = topicsStatus.find(
                        (status) => topicMap[status.topicId] === topic.name
                    );
                    return {
                        ...topic,
                        status: matchedStatus ? matchedStatus.status : "unknown",
                        fill: matchedStatus ? getStatusColor(matchedStatus.status) : "#D3D3D3",
                    };
                });
                console.log(updatedTopics);
                setTopics(updatedTopics); // Update state with new topic data
            } catch (error) {
                console.error("Error fetching topic statuses:", error);
            }
        };

        fetchTopicStatuses();
    }, [authSlice.user?.id]);

    return !finalFlag ? (
        
        <div className="learning-path-container">
            
            {/* Toggle Button */}
            <button className="toggle-btn" onClick={toggleInfo}>
                {showInfo ? "Hide Information" : "Show Information"}
            </button>

            <div className={`info-sectionX1 ${showInfo ? "" : "hidden"}`}>
    <h3>Learning Path Information</h3>
    <p>
        This learning path is based on <strong>Bloom's Taxonomy</strong>, which categorizes the learning process into six levels:
    </p>
    <ol>
        <li><strong>Remember:</strong> Recall basic concepts and terms.</li>
        <li><strong>Understand:</strong> Explain and interpret ideas.</li>
        <li><strong>Apply:</strong> Use concepts in real-life scenarios.</li>
        <li><strong>Analyze:</strong> Break down information into components.</li>
        <li><strong>Evaluate:</strong> Assess and justify decisions.</li>
        <li><strong>Create:</strong> Build new ideas or processes.</li>
    </ol>

    <p>
        On our platform, we cover three levels: <strong>Remember, Apply, and Analyze</strong>.
    </p>
    <p>
        <strong>One star ★</strong> represents a memory question.
    </p> 
    <p>
        <strong>Two stars ★★</strong> represent an application question.
    </p>
    <p>
        <strong>Three stars ★★★</strong> represent an analysis question.
    </p>
    <p>
        If you would like to learn more about Bloom's Taxonomy, you can find additional information at the following link:
        <a 
            href="https://en.wikipedia.org/wiki/Bloom%27s_taxonomy" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: "#007BFF", textDecoration: "underline", marginLeft: "5px" }}
        >
            Bloom's Taxonomy
        </a>.
    </p>
    <p style={{ fontStyle: "italic" }}>
        Click on any topic to begin exploring its content and tests.
    </p>
</div>
        <svg width="1000" height="800" style={{ margin: "0 auto", display: "block" }}>
            {/* Paths */}

            {/* Bubble Sort */}
            <path
                d="M30,70 C50,80 60,90 150,50"
                stroke="#4A90E2"
                fill="transparent"
                strokeWidth="4"
                strokeLinecap="round"
            />

            {/* Selection Sort */}
            <path
                d="M30,70 C60,90 40,100 150,270"
                stroke="#4A90E2"
                fill="transparent"
                strokeWidth="4"
                strokeLinecap="round"
            />

            {/* Insertion Sort */}
            <path
                d="M30,70 C60,90 40,100 250,230"
                stroke="#4A90E2"
                fill="transparent"
                strokeWidth="4"
                strokeLinecap="round"
            />
            {/* Counting + Radix */}
            <path
                d="M30,70 C60,90 40,100 400,140 C400,140 450,150 560,180"
                stroke="#4A90E2"
                fill="transparent"
                strokeWidth="4"
                strokeLinecap="round"
            />
            {/*Quick Sort */}
            <path
                d="M30,70  C45,100 200,80 450,110"
                stroke="#4A90E2"
                fill="transparent"
                strokeWidth="4"
                strokeLinecap="round"
            />
            {/*Merge Sort */}
            <path
                d="M200,91  C350,50 460,80 470,30"
                stroke="#4A90E2"
                fill="transparent"
                strokeWidth="4"
                strokeLinecap="round"
            />
            {/*Bucket Sort */}
            <path
                d="M170,111  C300,160 320,180 450,270"
                stroke="#4A90E2"
                fill="transparent"
                strokeWidth="4"
                strokeLinecap="round"
            />

            {/* Linked List + BST + AVL*/}
            <path
                d="M150,405  C230,450 320,400 500,500"
                stroke="#4A90E2"
                fill="transparent"
                strokeWidth="4"
                strokeLinecap="round"
            />

            {/* HASH */}
            <path
                d="M200,423  C230,450 240,440 300,500"
                stroke="#4A90E2"
                fill="transparent"
                strokeWidth="4"
                strokeLinecap="round"
            />

            {/* stack + DFS + Topological sort */}
            <path
                d="M250,630  C370,700 370,720 500,750"
                stroke="#4A90E2"
                fill="transparent"
                strokeWidth="4"
                strokeLinecap="round"
            />

            {/* Queue + Heap + Prime*/}
            <path
                d="M550,350  C620,260 640,265 720,300 C720,300 750,320 850,300"
                stroke="#4A90E2"
                fill="transparent"
                strokeWidth="4"
                strokeLinecap="round"
            />
            {/* Kruskal's Algorithm*/}
            <path
                d="M750,307 C760,307 780,320 850,230"
                stroke="#4A90E2"
                fill="transparent"
                strokeWidth="4"
                strokeLinecap="round"
            />
            {/* BFS + Dijkstra's algorithm*/}
            <path
                d="M550,350  C620,260 640,380 720,380 C720,380 750,400 830,430 "
                stroke="#4A90E2"
                fill="transparent"
                strokeWidth="4"
                strokeLinecap="round"
            />
            {/* Bellman-Ford*/}
                <path
                d="M750,395  C750,400 760,380 890,370"
                stroke="#4A90E2"
                fill="transparent"
                strokeWidth="4"
                strokeLinecap="round"
            />

            {/* Knapsack + LCS*/}
            <path
                d="M750,600  C840,610 780,570 890,570 "
                stroke="#4A90E2"
                fill="transparent"
                strokeWidth="4"
                strokeLinecap="round"
            />

            <path
                d="M750,600  C840,650 780,670 890,670 "
                stroke="#4A90E2"
                fill="transparent"
                strokeWidth="4"
                strokeLinecap="round"
            />

            {/* Circles */}
            {topics.map((topic, index) => (
                <>
                    <circle
                        cx={topic.cx}
                        cy={topic.cy}
                        r={hoveredCircle === topic.name ? 18 : 17} // Enlarges on hover
                        fill={hoveredCircle === topic.name ? "#22daff" : getClusterColor(topic.clusterId)} // Changes color on hover
                        onMouseEnter={() => handleMouseEnter(topic.name)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => {handleFinalExam(topics[index]); setHoveredCircle(null); }
                    }
                        style={{ cursor: "pointer", transition: "all 0.2s ease" }}
                    />
                <text
                    x={topic.cx}
                    y={topic.cy + 5} 
                    fill="gold"
                    fontSize="12"
                    textAnchor="middle"
                    fontWeight="bold"
                    >{getStartsNum(topic.status)}
                </text>
                <text
                    x={topic.name === "Counting Sort" ? topic.cx + 0 : topic.cx + 20} // Lower only Counting Sort
                    y={topic.name === "Counting Sort" ? topic.cy + 35 : topic.cy + 5} // Lower only Counting Sort
                    fill={hoveredText === topic.name ? "#22daff" : "#333"}
                    fontSize={ hoveredText === topic.name ? 18 : 14}
                    fontWeight="bold"
                    onClick={() => window.open(topic.demoLink, "_blank")
                        
                    }
                    onMouseEnter={() => handleTextMouseEnter(topic.name)}
                    onMouseLeave={handleTextMouseLeave}
                >
                    {topic.name}
                </text>
                </>
            ))}
        </svg>
        </div>
    ) : (
        <FinalExam setFinalFlag={setFinalFlag} 
        handlePassedTheTest={handlePassedTheTest} 
        topicId={currentTopicId} 
        topicName={topicMap[currentTopicId]} 
        questionLevel={ topics.find(topic => topic.topicId === currentTopicId)?.status}
    />
    );
};

export default LearningPath;
