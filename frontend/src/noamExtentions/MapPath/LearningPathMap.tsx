import React from 'react';
import './LearningPathMap.css';

const LearningPathMap = () => {
  const learningPath = [
    { name: "BFS", position: { top: "10%", left: "15%" }, completed: true },
    { name: "DFS", position: { top: "30%", left: "20%" }, completed: false },
    { name: "Sort", position: { top: "60%", left: "40%" }, completed: false },
    { name: "Final", position: { top: "90%", left: "70%" }, completed: false },
  ];

  return (
    <div className="map-container">
      <svg className="path-svg">
        <path
          d="M 100 100 C 200 50, 300 150, 400 200 S 600 300, 700 500"
          stroke="#000"
          strokeWidth="4"
          fill="transparent"
        />
      </svg>
      {learningPath.map((step, index) => (
        <div
          key={index}
          className={`step ${step.completed ? "completed" : ""}`}
          style={step.position}
        >
          {step.name}
        </div>
      ))}
    </div>
  );
};

export default LearningPathMap;
