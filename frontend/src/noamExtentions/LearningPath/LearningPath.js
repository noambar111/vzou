import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAppSelector } from "../../store/hooks"; 
import { selectAuthentication } from "../../store/reducers/auth-reducer";

const questionTopics = [
    { name: "Insertion Sort", demoLink: "/insertionsort", cx: 250, cy: 230, fill: "#FFC107", status: "unknown" },
    { name: "Counting Sort", demoLink: "/DataStructure/CountingSortPage", cx: 360, cy: 135, fill: "#4CAF50", status: "unknown" },
    { name: "Quick Sort", demoLink: "/DataStructure/QuickSortPage", cx: 450, cy: 110, fill: "#FFC107", status: "unknown" },
    { name: "Merge Sort", demoLink: "/DataStructure/MergeSortPage", cx: 470, cy: 30, fill: "#4CAF50", status: "unknown" },
    { name: "Radix Sort", demoLink: "/DataStructure/RadixSortPage", cx: 560, cy: 180, fill: "#FFC107", status: "unknown" },
    { name: "Selection Sort", demoLink: "/DataStructure/SelectionSortPage", cx: 150, cy: 270, fill: "#FFC107", status: "unknown" },
    { name: "Bubble Sort", demoLink: "/DataStructure/BubbleSortPage", cx: 150, cy: 50, fill: "#4CAF50", status: "unknown" },
    { name: "Bucket Sort", demoLink: "/DataStructure/BucketSortPage", cx: 450, cy: 270, fill: "#4CAF50", status: "unknown" },
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
    11: "Binary Search Tree (BST)",
    12: "Hash Table",
    13: "Breadth-First Search (BFS)",
    14: "Depth-First Search (DFS)",
    15: "Heap",
    16: "Topological Sort",
    17: "AVL Tree",
    18: "Dijkstra's Algorithm",
    19: "Bellman-Ford Algorithm",
    20: "Kruskal's Algorithm",
    21: "Prim's Algorithm",
    22: "Knapsack Problem",
    23: "Longest Common Subsequence (LCS)",
};

const getStatusColor = (status) => {
    switch (status) {
        case 0:
            return "#FF5722"; // red for "memory level fail"
        case 1:
            return "#FFC107"; // Yellow for "memory level pass"
        case 2:
            return "#4CAF50"; // orange for "app level passes"
        default:
            return "#D3D3D3"; // Red for "Unknown"
    }
};

const LearningPath = () => {
    const [hoveredCircle, setHoveredCircle] = useState(null);
    const [topics, setTopics] = useState([]);
    const authSlice = useAppSelector(selectAuthentication);
    

    const handleMouseEnter = (topic) => {
        setHoveredCircle(topic);
    };

    const handleMouseLeave = () => {
        setHoveredCircle(null);
    };

    useEffect(() => {
        const fetchTopicStatuses = async () => {
            try {
                const userId = authSlice.user?.id; // Get user ID from authentication state
                const response = await axios.get(`http://localhost:3001/api/user-progress/user/${userId}`);
                const topicsStatus = response.data;
                console.log(topicsStatus);
                
                const processData = (topicsStatus) => {
                    return topicsStatus.map((item) => ({
                        name: topicMap[item.topicId], // Get the name using topicId
                        status: item.status,         // Keep the status
                        lastUpdated: item.lastUpdated, // Include the lastUpdated field if needed
                    }));
                };

            } catch (error) {
                console.error("Error fetching topic statuses:", error);
            }
        };

        fetchTopicStatuses();
    }, []);

    return (
        <svg width="1000" height="1000" style={{ margin: "0 auto", display: "block" }}>
            {/* Paths */}
            <path
                d="M30,70 C50,80 60,90 150,50"
                stroke="#4A90E2"
                fill="transparent"
                strokeWidth="4"
                strokeLinecap="round"
            />
            <path
                d="M30,70 C60,90 40,100 150,270"
                stroke="#4A90E2"
                fill="transparent"
                strokeWidth="4"
                strokeLinecap="round"
            />
            <path
                d="M30,70 C60,90 40,100 250,230"
                stroke="#4A90E2"
                fill="transparent"
                strokeWidth="4"
                strokeLinecap="round"
            />
            <path
                d="M30,70 C60,90 40,100 400,140 C400,140 450,150 560,180"
                stroke="#4A90E2"
                fill="transparent"
                strokeWidth="4"
                strokeLinecap="round"
            />
            <path
                d="M30,70  C45,100 200,80 450,110"
                stroke="#4A90E2"
                fill="transparent"
                strokeWidth="4"
                strokeLinecap="round"
            />
            <path
                d="M200,91  C350,50 460,80 470,30"
                stroke="#4A90E2"
                fill="transparent"
                strokeWidth="4"
                strokeLinecap="round"
            />
            <path
                d="M170,111  C300,160 320,180 450,270"
                stroke="#4A90E2"
                fill="transparent"
                strokeWidth="4"
                strokeLinecap="round"
            />

            {/* Circles */}
            {questionTopics.map((topic, index) => (
                <>
                <circle
                    key={index}
                    cx={topic.cx}
                    cy={topic.cy}
                    r={hoveredCircle === topic.name ? 18 : 15} // Enlarges on hover
                    fill={hoveredCircle === topic.name ? "#FF5722" : topic.fill} // Changes color on hover
                    className="circle"
                    onClick={() => alert(`${topic.name}`)} // Replace with navigation if needed
                    onMouseEnter={() => handleMouseEnter(topic.name)}
                    onMouseLeave={handleMouseLeave}
                    style={{ cursor: "pointer", transition: "all 0.2s ease" }}
                />
                <text
                    x={topic.name === "Counting Sort" ? topic.cx + 0 : topic.cx + 20} // Lower only Counting Sort
                    y={topic.name === "Counting Sort" ? topic.cy + 35 : topic.cy + 5} // Lower only Counting Sort
                    fill="#333"
                    fontSize="14"
                    fontWeight="bold"
                >
                    {topic.name}
                </text>
                </>
            ))}
        </svg>
    );
};

export default LearningPath;
