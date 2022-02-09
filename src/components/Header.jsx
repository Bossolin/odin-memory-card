import React from "react";
import ScoreBoard from "./ScoreBoard";

const Header = ({ score, bestScore }) => {
  return (
    <div className="header">
      <div className="title">
        <h1>Pizza Memory Game</h1>
      </div>
      <ScoreBoard score={score} bestScore={bestScore} />
      <div className="info">
        <h3>
          Click on every pizza image only once. Every click will shift the
          cards&apos; position.
        </h3>
      </div>
    </div>
  );
};

export default Header;
