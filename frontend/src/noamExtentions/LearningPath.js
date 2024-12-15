import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAppSelector } from "../store/hooks";
import { selectAuthentication } from "../store/reducers/auth-reducer";

// Predefined topics mapping by question ID
const questionTopics = [
    "Insertion Sort",
    "Counting Sort",
    "Quick Sort",
    "Stack",
    "Queue",
    "Binary Search Tree (BST)",
    "DFS",
    "BFS",
    "Dijkstra"
];

const LearningPath = () => {
    const [learningPath, setLearningPath] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const authSlice = useAppSelector(selectAuthentication);
    const userId = authSlice.user?.id;

    useEffect(() => {
        const fetchLearningPath = async () => {
            try {
                if (!userId) throw new Error("User ID is missing");
                const response = await axios.get(
                    `http://localhost:3001/api/test-results/learning-path/${userId}`
                );
                const parsedLearningPath = JSON.parse(response.data.learningPath);
                setLearningPath(parsedLearningPath);
            } catch (err) {
                console.error("Error fetching learning path:", err);
                setError("Failed to load learning path");
            } finally {
                setLoading(false);
            }
        };
        fetchLearningPath();
    }, [userId]);

    const getColor = (status) => (status === "Completed" ? "#4CAF50" : "#FF0000");

    if (loading) return <p>Loading learning path...</p>;
    if (error) return <p>{error}</p>;

    // Positions along the path
    const pathPositions = [
        { x: 90, y: 200 },
        { x: 250, y: 150 },
        { x: 400, y: 210 },
        { x: 550, y: 180 },
        { x: 700, y: 140 },
        { x: 850, y: 160 },
        { x: 1000, y: 205 },
        { x: 1150, y: 240 },
        { x: 1300, y: 250 },
    ];

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <div>
                <h2 style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
                    Your Personalized Learning Path
                </h2>
                <svg width="1400" height="400" style={{ margin: "0 auto", display: "block" }}>
                    {/* Smooth Path */}
                    <path
                        d="M100,200 C250,50 400,300 550,180 S1000,250 1300,250"
                        stroke="#4A90E2"
                        fill="transparent"
                        strokeWidth="6"
                        strokeLinecap="round"
                    />

                    {/* Points and Labels */}
                    {Object.entries(learningPath).map(([key, value], index) => {
                        const { x, y } = pathPositions[index] || { x: 0, y: 0 };
                        const topic = questionTopics[index] || `Question ${index}`; // Fetch the topic by index
                        return (
                            <g key={key}>
                                {/* Circle */}
                                <circle
                                    cx={x}
                                    cy={y}
                                    r="20"
                                    fill={getColor(value)}
                                    stroke="black"
                                    strokeWidth="2"
                                />
                                {/* Topic Label */}
                                <text
                                    x={x}
                                    y={y - 33}
                                    fontSize="14"
                                    fontWeight="bold"
                                    fill="#333"
                                    textAnchor="middle"
                                    fontFamily="Arial, sans-serif"
                                >
                                    {topic}
                                </text>
                                {/* Status Label */}
                                <text
                                    x={x}
                                    y={y + 40}
                                    fontSize="12"
                                    fill={getColor(value)}
                                    textAnchor="middle"
                                    fontFamily="Arial, sans-serif"
                                >
                                    {value}
                                </text>
                            </g>
                        );
                    })}
                </svg>
            </div>
        </div>
    );
};

export default LearningPath;
