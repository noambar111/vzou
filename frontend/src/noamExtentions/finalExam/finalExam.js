import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAppSelector } from "./../../store/hooks"; 
import { selectAuthentication } from "./../../store/reducers/auth-reducer";
import "./FinalExam.css";

const FinalExam = ({ setFinalFlag, handlePassedTheTest, topicId, topicName, questionLevel }) => {
    const authSlice = useAppSelector(selectAuthentication);
    const [answers, setAnswers] = useState({});
    const [questions, setQuestions] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [passed, setPassed] = useState(false);
    const qLevel = questionLevel;
    const rightQ = questions.length;

    const getStarNum = (status) => {
        console.log("topic id" + topicId);
        console.log(status);
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

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/get-questions-byTopic/${topicId}/${questionLevel}`);
                setQuestions(response.data); 
            } catch (err) {
                console.error("Error fetching questions:", err);
            }
        };
        fetchQuestions();
    }, [topicId, questionLevel]);

    const handleOptionChange = (questionId, selectedOption) => {
        setAnswers((prev) => ({ ...prev, [questionId]: selectedOption }));
    };

    const handleSubmit = async () => {
        console.log("number of q", rightQ);
        let currentScore = 0;
        questions.forEach((q) => {
            console.log(`Question ID: ${q.id}, Correct Answer: ${q.correct}, User Answer: ${answers[q.id]}`);

            if (answers[q.id] === q.correct) currentScore += 1;
            console.log(score);
        });
        console.log(currentScore);

        if (currentScore === rightQ) {
            const userId = authSlice.user?.id;
            console.log("Sending request to save progress...");
            console.log("Payload:", { userId, topicId });
        
            try {
                const response = await axios.post(`http://localhost:3001/api/user-progress/save`, { userId, topicId });
                if (response.status === 201) {
                    setPassed(true);
                }
            } catch (error) {
                console.error("Error saving progress:", error);
            }
        }

        setScore(currentScore);
        setSubmitted(true);

    };

    return (
        <div className="quiz-container">
            <h1>{topicName} - Test Level - {getStarNum(qLevel)}</h1>
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
                    <h2>Your Score: {score} / {rightQ}</h2>
                </div>
            )}
            {!submitted && (
                <button onClick={handleSubmit} className="submit-button">
                    Submit
                </button>
            )}
            {/* Always display the Back to Learning Path button */}
            <button
                onClick={() => {
                    setFinalFlag(false); 
                    if(passed) {
                        handlePassedTheTest();
                    }
                }}
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
