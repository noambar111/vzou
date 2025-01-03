import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAppSelector } from "./../../store/hooks"; 
import { selectAuthentication } from "./../../store/reducers/auth-reducer";
import "./FinalExam.css";

const FinalExam = ({ setFinalFlag, topicId, topicName }) => {
    const authSlice = useAppSelector(selectAuthentication);
    const [answers, setAnswers] = useState({});
    const [questions, setQuestions] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/get-questions-byTopic/${topicId}`);
                setQuestions(response.data); 
            } catch (err) {
                console.error("Error fetching questions:", err);
            }
        };
        fetchQuestions();
    }, [topicId]);

    const handleOptionChange = (questionId, selectedOption) => {
        setAnswers((prev) => ({ ...prev, [questionId]: selectedOption }));
    };

    const handleSubmit = async () => {
        let currentScore = 0;
        questions.forEach((q) => {
            if (answers[q.id] === q.correct) currentScore += 1;
        });

        if (currentScore === questions.length) {
            const userId = authSlice.user?.id;
            await axios.post(`http://localhost:3001/api/user-progress/save`, { userId, topicId });
        }

        setScore(currentScore);
        setSubmitted(true);
    };

    return (
        <div className="quiz-container">
            <h1>{topicName} - Final Test</h1>
            {!submitted ? (
                questions.map((question) => (
                    <div key={question.id} className="question-container">
                        <h3>{question.question}</h3>
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
                ))
            ) : (
                <div className="result">
                    <h2>Your Score: {score} / {questions.length}</h2>
                </div>
            )}
            {!submitted && (
                <button onClick={handleSubmit} className="submit-button">
                    Submit
                </button>
            )}
            {/* Always display the Back to Learning Path button */}
            <button
                onClick={() => setFinalFlag(false)}
                className="back-button"
                style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    backgroundColor: "#4CAF50",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Back to Learning Path
            </button>
        </div>
    );
};

export default FinalExam;
