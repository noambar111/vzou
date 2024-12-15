import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAppSelector } from "../store/hooks"
import { selectAuthentication } from "../store/reducers/auth-reducer";

import FloatUpContainer from "../components/UI/FloatUpContainer";
import QuizApp from "./levelTest/QuizApp";
import LearningPath from "./LearningPath"; // Your learning path component

function CustomizedPage() {
  const [quizCompleted, setQuizCompleted] = useState(false); // Track quiz completion
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Get userId from Redux authentication slice
  const authSlice = useAppSelector(selectAuthentication);
  const userId = authSlice.user?.id; // Extract user ID safely

  useEffect(() => {
    const fetchQuizStatus = async () => {
      if (!userId) {
        setError("User is not logged in.");
        setLoading(false);
        return;
      }
  
      try {
        const response = await axios.get(
          `http://localhost:3001/api/test-results/quiz-status/${userId}`
        );
        console.log("aaaaAPI Response:", response.data); // Debug log
        setQuizCompleted(response.data.hasCompletedQuiz);
      } catch (err) {
        console.error("Failed to fetch quiz status:", err);
        setError("Failed to load quiz status.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchQuizStatus();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div style={{ color: "red" }}>{error}</div>;
  }

  return (
    <div>
      <FloatUpContainer>
        {quizCompleted ? (
          <LearningPath /> // Show learning path if quiz is completed
        ) : (
          <QuizApp /> // Show quiz if quiz is not completed
        )}
      </FloatUpContainer>
    </div>
  );
}

export default CustomizedPage;
