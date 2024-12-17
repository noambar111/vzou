import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAppSelector } from "../store/hooks";
import { selectAuthentication } from "../store/reducers/auth-reducer";
import { useHistory } from "react-router-dom";


// Predefined topics mapping by question ID
const questionTopics = [
    { name: "Insertion Sort", demoLink: "/insertionsort" },
    { name: "Counting Sort", demoLink: "/DataStructure/CountingSortPage" },
    { name: "Quick Sort", demoLink: "/DataStructure/QuickSortPage" },
    { name: "Stack", demoLink: "/DataStructure/StackPage" },
    { name: "Queue", demoLink: "/DataStructure/QueuePage" },
    { name: "Binary Search Tree (BST)", demoLink: "/DataStructure/BSTreePage" },
    { name: "DFS", demoLink: "/DataStructure/DFSPage" },
    { name: "BFS", demoLink: "/DataStructure/BfsPage" },
    { name: "Dijkstra", demoLink: "/DataStructure/DijkstraPage" },
];

const LearningPath = () => {
    const history = useHistory();
    const [learningPath, setLearningPath] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [completedSteps, setCompletedSteps] = useState([]); // Tracks completed quizzes
    const authSlice = useAppSelector(selectAuthentication);
    const userId = authSlice.user?.id;

    useEffect(() => {
        const fetchLearningPath = async () => {
            try {
                if (!userId) throw new Error("User ID is missing");
                const response = await axios.get(
                    `http://localhost:3001/api/test-results/learning-path/${userId}`
                );
                const rawLearningPath = response.data?.learningPath;

                if (!rawLearningPath) {
                    throw new Error("Learning path data is missing");
                }

                setLearningPath(rawLearningPath);
            } catch (err) {
                console.error("Error fetching learning path:", err);
                setError("Failed to load learning path");
            } finally {
                setLoading(false);
            }
        };
        fetchLearningPath();
    }, [userId]);

    const getColor = (status, index) => {
        if (completedSteps.includes(index)) return "#4CAF50"; // Green if completed
        if (index === 0 || completedSteps.includes(index - 1)) return "#FF0000"; // Red if active
        return "#C0C0C0"; // Gray if locked
    };

    const handleQuizAttempt = (index) => {
        if (completedSteps.includes(index - 1) || index === 0) {
            setCompletedSteps((prev) => [...prev, index]);

            // Navigate to the quiz test page
            window.open(`/quiz/insertion-sort-test`, "_blank");
        } else {
            alert("Complete the previous step first!");
        }
    };

    if (loading) return <p>Loading learning path...</p>;
    if (error) return <p>{error}</p>;

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
                        cursor="pointer"
                        onClick={() => {
                            alert("Click circles to attempt quizzes or paths for demonstrations.");
                        }}
                    />

                    {/* Points and Labels */}
                    {Object.entries(learningPath).map(([key, value], index) => {
                        const { x, y } = pathPositions[index] || { x: 0, y: 0 };
                        const topic = questionTopics[index]?.name || `Question ${index}`;
                        const demoLink = questionTopics[index]?.demoLink;

                        return (
<g key={key} cursor="pointer">
    {/* Circle */}
    <circle
        cx={x}
        cy={y}
        r="20"
        fill={completedSteps.includes(index) ? "#27ae60" : getColor(value, index)} /* Green when completed */
        stroke="black"
        strokeWidth="2"
        cursor="pointer"
        onClick={() => handleQuizAttempt(index)}
    />

    {/* Topic Label */}
    <text
        x={x}
        y={y - 30}
        fontSize="14"
        fontWeight="bold"
        fill="#333"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        cursor="pointer"
        onMouseEnter={(e) => {
            e.target.style.fill = "#2980b9"; // Blue on hover
            e.target.style.textDecoration = "underline"; // Underline on hover
        }}
        onMouseLeave={(e) => {
            e.target.style.fill = "#333"; // Default color
            e.target.style.textDecoration = "none"; // Remove underline
        }}
        onClick={() => window.open(demoLink, "_blank")}
    >
        {topic}
    </text>

    {/* Status Label */}
    <text
        x={x}
        y={y + 40}
        fontSize="12"
        fill={completedSteps.includes(index) ? "#27ae60" : "#e74c3c"} /* Green if completed, red otherwise */
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
    >
        {completedSteps.includes(index) ? "Completed" : value}
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
