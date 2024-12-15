import React, { useState } from 'react';

import { useAppSelector } from "../../store/hooks"; // Your Redux hook
import { selectAuthentication } from "../../store/reducers/auth-reducer";

import './QuizApp.css'; // Custom scoped CSS
import questions from './questions.json'; // Questions JSON file
import axios from 'axios';

const QuizApp = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Index of current question
    const [results, setResults] = useState({}); // Object to store answers by question ID
    const [isComplete, setIsComplete] = useState(false); // Completion status
    const authSlice = useAppSelector(selectAuthentication);

    const totalQuestions = questions.length;

    const handleAnswer = (questionId, isCorrect, isMemoryLevel, selectedOption) => {
        const updatedResults = { ...results };
    
        // If this is the first time answering this question, initialize it
        if (!updatedResults[questionId]) {
            updatedResults[questionId] = { memory: 0, application: 0 };
        }
    
        // Update the results based on the difficulty level
        if (isMemoryLevel) {
            updatedResults[questionId].memory = isCorrect ? 1 : 0; // 1 = Correct, 0 = Incorrect
        } else {
            updatedResults[questionId].application = isCorrect ? 1 : 0; // 1 = Correct, 0 = Incorrect
        }
    
        // Save the selected answer to manage "checked" state
        updatedResults[questionId].selectedOption = selectedOption;
    
        setResults(updatedResults);
    
        // Logic to move to the next question
        const nextIndex = currentQuestionIndex + 1;
    
        // Check if the next index is out of bounds
        if (nextIndex >= totalQuestions) {
            setIsComplete(true); // Mark quiz as complete
            return;
        }
    
        if (isMemoryLevel && !isCorrect) {
            // Skip the application question if the memory question was incorrect
            const nextMemoryQuestionIndex = questions.findIndex(
                (q, idx) =>
                    idx > currentQuestionIndex && q.difficulty === "Memory"
            );
    
            // If there are no more memory-level questions, finish the quiz
            if (nextMemoryQuestionIndex === -1) {
                setIsComplete(true);
            } else {
                setCurrentQuestionIndex(nextMemoryQuestionIndex);
            }
        } else {
            setCurrentQuestionIndex(nextIndex);
        }
    };
    

    const handleSubmit = () => {
        const userId = authSlice.user?.id; // Get user ID from authentication state
        console.log("handleSubmit: User ID - " + userId);
      
        const payload = Object.keys(results).map((questionId) => ({
          questionId: parseInt(questionId, 10),
          memoryScore: results[questionId].memory,
          applicationScore: results[questionId].application,
          userId, // Use dynamic user ID here
        }));
      
        console.log("Payload to submit:", payload);
      
        // Step 1: Submit the quiz results
        axios
          .post("http://localhost:3001/api/test-results/results", { results: payload })
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
                                    checked={
                                        results[currentQuestion.id]?.selectedOption === option
                                    } // Ensure correct option is selected
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
