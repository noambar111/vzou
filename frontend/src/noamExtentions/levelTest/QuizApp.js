import React, { useState } from 'react';

import { useAppSelector } from "../../store/hooks"; 
import { selectAuthentication } from "../../store/reducers/auth-reducer";

import './QuizApp.css'; // Custom scoped CSS
import questions from './questions.json'; // Questions JSON file
import axios from 'axios';

const QuizApp = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Index of current question
    const [results, setResults] = useState(new Array(24).fill(0)); // Object to store answers by question ID
    const [isComplete, setIsComplete] = useState(false); // Completion status
    const authSlice = useAppSelector(selectAuthentication);
    
    const totalQuestions = questions.length;
    
    const handleAnswer = (questionId, isCorrect, isMemoryLevel, selectedOption) => {
        const updatedResults = { ...results };

        if (isMemoryLevel) 
        {
            isCorrect ? updatedResults[questionId] = 1 : updatedResults[questionId] = 0 ; 
        } else {
            isCorrect ? updatedResults[questionId] = 2 : updatedResults[questionId] = 1 ; 
        }
        
        setResults(updatedResults);
    
        // Logic to move to the next question
        let nextIndex = currentQuestionIndex + 1;
    
        if (isMemoryLevel && !isCorrect) {
            nextIndex = nextIndex + 1;
        }

        if (nextIndex >= totalQuestions) {
            setIsComplete(true); // Mark quiz as complete
            return;
        }
        setCurrentQuestionIndex(nextIndex);
    };
    

    const handleSubmit = () => {
        const userId = authSlice.user?.id; // Get user ID from authentication state
        console.log("handleSubmit: User ID - " + userId);
        console.log("Payload to submit:", results);
        const request = {"userId" : userId, "results" : results};
        axios
          .post("http://localhost:3001/api/user-progress/initProgress", request )
          .catch((err) => {
            console.error("Error during quiz submission or status update:", err);
            alert("An error occurred. Please try again.");
          });
      };
      
    

    if (isComplete) {
        return (
            <div className="quiz-app">
                <div className="quiz-container">
                    <h2 className="quiz-title">Quiz Completed</h2>
                    <button className="submit-button" onClick={handleSubmit}>
                        Submit Results
                    </button>
                </div>
            </div>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="quiz-app">
            <div className="quiz-container">
                <h2 className="quiz-title">Quiz</h2>
                <div className="question-card">
                    <h3 className="question-text">{currentQuestion.question}</h3>
                    <div className="options-container">
                        {currentQuestion.options.map((option, index) => (
                            <label className="option" key={index}>
                                <input
                                    type="radio"
                                    name={`question-${currentQuestion.id}`}
                                    value={option}
                                    checked={false}
                                    onChange={() =>
                                        handleAnswer(
                                            currentQuestion.id,
                                            option === currentQuestion.correctAnswer,
                                            currentQuestion.difficulty === "Memory",
                                            option
                                        )
                                    }
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizApp;
