import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAppSelector } from "../../store/hooks"; 
import { selectAuthentication } from "../../store/reducers/auth-reducer";
import FinalExam from "../finalExam/finalExam";

const questionTopics = [
    { topicId: 0, name: "Insertion Sort", demoLink: "/insertionsort", finalExam: "/quiz/insertion-sort-test", cx: 250, cy: 230, fill: "#FFC107", status: "unknown" },
    { topicId: 1, name: "Counting Sort", demoLink: "/DataStructure/CountingSortPage", cx: 360, cy: 135, fill: "#4CAF50", status: "unknown" },
    { topicId: 2, name: "Quick Sort", demoLink: "/DataStructure/QuickSortPage", cx: 450, cy: 110, fill: "#FFC107", status: "unknown" },
    { topicId: 3, name: "Merge Sort", demoLink: "/DataStructure/MergeSortPage", cx: 470, cy: 30, fill: "#4CAF50", status: "unknown" },
    { topicId: 4, name: "Radix Sort", demoLink: "/DataStructure/RadixSortPage", cx: 560, cy: 180, fill: "#FFC107", status: "unknown" },
    { topicId: 5, name: "Selection Sort", demoLink: "/DataStructure/SelectionSortPage", cx: 150, cy: 270, fill: "#FFC107", status: "unknown" },
    { topicId: 6, name: "Bubble Sort", demoLink: "/DataStructure/BubbleSortPage", cx: 150, cy: 50, fill: "#4CAF50", status: "unknown" },
    { topicId: 7, name: "Bucket Sort", demoLink: "/DataStructure/BucketSortPage", cx: 450, cy: 270, fill: "#4CAF50", status: "unknown" },
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
            return "#FF0000"; // red for "memory level fail"
        case 1:
            return "#FF8C00"; // orange for "app level passes"
        case 2:
            return "#FFD700"; // Yellow for "memory level pass"
        case 3:
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
    const authSlice = useAppSelector(selectAuthentication);
    
    const handleTextMouseEnter = (topic) => {
        setHoveredText(topic);
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

    const userId = authSlice.user?.id; // Get user ID from authentication state

    useEffect(() => {
        const fetchTopicStatuses = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/user-progress/user/${userId}`);
                const topicsStatus = response.data;

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
            {topics.map((topic, index) => (
                <>
                    <circle
                        cx={topic.cx}
                        cy={topic.cy}
                        r={hoveredCircle === topic.name ? 18 : 15} // Enlarges on hover
                        fill={hoveredCircle === topic.name ? "#22daff" : topic.fill} // Changes color on hover
                        onMouseEnter={() => handleMouseEnter(topic.name)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => {setFinalFlag(true); setCurrentTopicId(topic.topicId);}}
                        style={{ cursor: "pointer", transition: "all 0.2s ease" }}
                    />
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
    ) : (
        <FinalExam setFinalFlag={setFinalFlag} topicId={currentTopicId} topicName={topicMap[currentTopicId]}/>
    );
};

export default LearningPath;
