import React from "react";

const ScoreBoard = () => {
  return (
    <div className="score-board">
      <div className="current-score">
        <h2>Current Score: 0</h2>
      </div>
      <div className="best-score">
        <h2>0 :Best Score</h2>
      </div>
    </div>
  );
};

export default ScoreBoard;
