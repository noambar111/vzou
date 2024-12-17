import React, { useState } from "react";
import axios from "axios";
import "./InsertionSortTestPage.css";

const insertionSortQuestions = [
    {
        id: 1,
        question: "What is the time complexity of Insertion Sort in the worst case?",
        options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
        correct: "O(n^2)",
    },
    {
        id: 2,
        question: "Insertion Sort is best suited for:",
        options: [
            "Small datasets or nearly sorted datasets",
            "Large unsorted datasets",
            "Parallel processing",
            "Distributed systems",
        ],
        correct: "Small datasets or nearly sorted datasets",
    },
    {
        id: 3,
        question: "What is the main advantage of Insertion Sort?",
        options: [
            "It works in constant time",
            "It is a stable sorting algorithm",
            "It has linear time complexity for all inputs",
            "It doesn't require memory",
        ],
        correct: "It is a stable sorting algorithm",
    },
    {
        id: 4,
        question: "In Insertion Sort, elements are compared and placed in the:",
        options: ["Middle of the array", "Unsorted portion", "Sorted portion", "Random position"],
        correct: "Sorted portion",
    },
];

const InsertionSortTestPage = () => {
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    const handleOptionChange = (questionId, selectedOption) => {
        setAnswers((prev) => ({ ...prev, [questionId]: selectedOption }));
    };

    const handleSubmit = async () => {
        let currentScore = 0;
        insertionSortQuestions.forEach((q) => {
            if (answers[q.id] === q.correct) currentScore += 1;
        });
        setScore(currentScore);
        setSubmitted(true);

        try {
            await axios.post("/api/learning-path/completion", {
                testName: "Insertion Sort Final Test",
                score: currentScore,
                total: insertionSortQuestions.length,
            });
        } catch (error) {
            console.error("Error submitting test results:", error);
        }
    };

    return (
        <div className="quiz-container">
            <h1 className="quiz-title">Insertion Sort - Final Test</h1>
            <p className="quiz-intro">Test your knowledge about Insertion Sort!</p>

            {insertionSortQuestions.map((question) => (
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
                        Your Score: <span>{score}</span> / {insertionSortQuestions.length}
                    </h2>
                </div>
            )}
        </div>
    );
};

export default InsertionSortTestPage;
