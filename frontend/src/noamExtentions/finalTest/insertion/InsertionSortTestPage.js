import React, { useState } from "react";
import axios from "axios";
import "./InsertionSortTestPage.css";
import { useAppSelector } from "../../../store/hooks"; 
import { selectAuthentication } from "../../../store/reducers/auth-reducer";

const insertionSortApplicationQuestions = [
    {
        id: 1,
        question: "Given the array [8, 3, 5, 2], what will be the state of the array after 3 steps of Insertion Sort?",
        options: [
            "[3, 8, 5, 2]",
            "[3, 5, 8, 2]",
            "[2, 3, 5, 8]",
            "[8, 3, 2, 5]",
        ],
        correct: "[3, 5, 8, 2]",
    },
    {
        id: 2,
        question: "You are given a nearly sorted dataset. Why would you choose Insertion Sort over other algorithms?",
        options: [
            "It has a faster runtime for nearly sorted datasets",
            "It can handle large datasets efficiently",
            "It is designed for parallel processing",
            "It is always faster than other sorting algorithms",
        ],
        correct: "It has a faster runtime for nearly sorted datasets",
    },
    {
        id: 3,
        question: "Write the state of the array after inserting the 3rd element of the array [7, 4, 5, 2] using Insertion Sort.",
        options: [
            "[4, 7, 5, 2]",
            "[4, 5, 7, 2]",
            "[7, 4, 5, 2]",
            "[2, 4, 5, 7]",
        ],
        correct: "[4, 5, 7, 2]",
    },
    {
        id: 4,
        question: "How would you modify Insertion Sort to sort an array of objects by a specific property (e.g., age)?",
        options: [
            "Compare the specific property while sorting",
            "Sort the array randomly",
            "Use another sorting algorithm",
            "Convert objects to strings and sort",
        ],
        correct: "Compare the specific property while sorting",
    },
    {
        id: 5,
        question: "For a partially sorted array, how does the performance of Insertion Sort compare to QuickSort?",
        options: [
            "Insertion Sort performs better for small, nearly sorted arrays",
            "QuickSort always performs better",
            "Both algorithms have the same performance",
            "QuickSort is better for all cases",
        ],
        correct: "Insertion Sort performs better for small, nearly sorted arrays",
    },
];

const InsertionSortTestPage = () => {
    const authSlice = useAppSelector(selectAuthentication);
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [allRight, setAllRight] = useState(false);

    const handleOptionChange = (questionId, selectedOption) => {
        setAnswers((prev) => ({ ...prev, [questionId]: selectedOption }));
    };

    const handleSubmit = async () => {
        let currentScore = 0;
        insertionSortApplicationQuestions.forEach((q) => {
            if (answers[q.id] === q.correct) currentScore += 1;
        });

        if(currentScore == 5) 
        {
            const userId = authSlice.user?.id; // Get user ID from authentication state
            setAllRight(true);
            const topicId = 0;
            const response = await axios.post(`http://localhost:3001/api/user-progress/save`, {
                userId,
                topicId,
            });
            
        }

        setScore(currentScore);
        setSubmitted(true);
    };

    return (
        <div className="quiz-container">
            <h1 className="quiz-title">Insertion Sort - Final Test</h1>
            <p className="quiz-intro">Test your knowledge about Insertion Sort!</p>

            {insertionSortApplicationQuestions.map((question) => (
                <div key={question.id} className="question-container">
                    <h3 className="question">{question.question}</h3>
                    {question.options.map((option) => (
                        <label key={option} className="option-label">
                            <input
                                type="radio"
                                name={`question-${question.id}`}
                                value={option}
                                checked={answers[question.id] === option}
                                onChange={() => handleOptionChange(question.id, option)}
                            />
                            {option}
                        </label>
                    ))}
                </div>
            ))}

            {!submitted ? (
                <button onClick={handleSubmit} className="submit-button">
                    Submit Test
                </button>
            ) : (
                <div className="result">
                    <h2>
                        Your Score: <span>{score}</span> / {insertionSortApplicationQuestions.length}
                    </h2>
                </div>
            )}
        </div>
    );
};

export default InsertionSortTestPage;
