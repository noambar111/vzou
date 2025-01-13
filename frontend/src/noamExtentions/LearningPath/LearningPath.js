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
    { topicId: 8, name: "Linked List", demoLink: "/", cx: 150, cy: 400, fill: "#4CAF50", status: "unknown" },
    { topicId: 9, name: "Binary Search Tree", demoLink: "/", cx: 340, cy: 435, fill: "#4CAF50", status: "unknown" },
    { topicId: 10, name: "AVL Tree", demoLink: "/", cx: 500, cy: 500, fill: "#4CAF50", status: "unknown" },
    { topicId: 11, name: "Queue", demoLink: "/", cx: 550, cy: 350, fill: "#4CAF50", status: "unknown" },
    { topicId: 12, name: "Heap", demoLink: "/", cx: 700, cy: 290, fill: "#4CAF50", status: "unknown" },
    { topicId: 13, name: "Prim", demoLink: "/", cx: 850, cy: 300, fill: "#4CAF50", status: "unknown" },
    { topicId: 14, name: "BFS", demoLink: "/", cx: 710, cy: 375, fill: "#4CAF50", status: "unknown" },
    { topicId: 15, name: "Dijkstra's algorithm", demoLink: "/", cx: 830, cy: 430, fill: "#4CAF50", status: "unknown" },
    { topicId: 16, name: "Knapsack", demoLink: "/", cx: 890, cy: 570, fill: "#4CAF50", status: "unknown" },
    { topicId: 17, name: "LCS", demoLink: "/", cx: 890, cy: 670, fill: "#4CAF50", status: "unknown" },
    { topicId: 18, name: "Hash Table", demoLink: "/", cx: 300, cy: 500, fill: "#4CAF50", status: "unknown" },
    { topicId: 19, name: "Stack", demoLink: "/", cx: 250, cy: 630, fill: "#4CAF50", status: "unknown" },
    { topicId: 20, name: "DFS", demoLink: "/", cx: 370, cy: 700, fill: "#4CAF50", status: "unknown" },
    { topicId: 21, name: "Topological Sort", demoLink: "/", cx: 500, cy: 750, fill: "#4CAF50", status: "unknown" },
    { topicId: 22, name: "Bellman-Ford", demoLink: "/", cx: 890, cy: 370, fill: "#4CAF50", status: "unknown" },
    { topicId: 23, name: "Kruskal's Algorithm", demoLink: "/", cx: 850, cy: 230, fill: "#4CAF50", status: "unknown" },
];

const topicMap = {
    0: "Insertion Sort",
    1: "Counting Sort",
    2: "Quick Sort",
    3: "Merge Sort",
    4: "Radix Sort",
    5: "Selection Sort",
    6: "Bubble Sort",
    7: "Bucket Sort",
    8: "Linked List",
    9: "Binary Search Tree",
    10: "AVL Tree",
    11: "Queue",
    12: "Heap",
    13: "Prim",
    14: "BFS",
    15: "Dijkstra's algorithm",
    16: "Knapsack",
    17: "LCS"
    // 8: "Bucket Sort",
    // 9: "Merge Sort",
    // 10: "Quick Sort",
    // 11: "Binary Search Tree (BST)",
    // 12: "Hash Table",
    // 13: "Breadth-First Search (BFS)",
    // 14: "Depth-First Search (DFS)",
    // 15: "Heap",
    // 16: "Topological Sort",
    // 17: "AVL Tree",
    // 18: "Dijkstra's Algorithm",
    // 19: "Bellman-Ford Algorithm",
    // 20: "Kruskal's Algorithm",
    // 21: "Prim's Algorithm",
    // 22: "Knapsack Problem",
    // 23: "Longest Common Subsequence (LCS)",
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

    const handleFinalExam = (topic) => {
        if(topic.topicId === 4 && topic.status != 3)
        {
            alert("Must complete Counting Sort first!")
        }
        else if(topic.topicId === 12 && topic.status != 3)
        {
            alert("Must complete Queue D-S first!")
        }
        else
        {
            setFinalFlag(true); 
            setCurrentTopicId(topic.topicId);
        }
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
                        r={hoveredCircle === topic.name ? 18 : 15} // Enlarges on hover
                        fill={hoveredCircle === topic.name ? "#22daff" : topic.fill} // Changes color on hover
                        onMouseEnter={() => handleMouseEnter(topic.name)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => {handleFinalExam(topics[index])}
                    }
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
