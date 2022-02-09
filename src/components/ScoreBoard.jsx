import React from "react";

const ScoreBoard = ({ score, bestScore }) => {
  return (
    <div className="score-board">
      <div className="current-score">
        <h2>
          Current Score: <br />
          {score}
        </h2>
      </div>
      <div className="best-score">
        <h2>
          Best Score: <br />
          {bestScore}
        </h2>
      </div>
    </div>
  );
};

export default ScoreBoard;
