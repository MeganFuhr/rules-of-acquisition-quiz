import React from "react";

export default function EndGame() {
  return (
    <div className="div-question container div-gameover container">
      <h1>Game Over !</h1>
      <h2>Latinum Bars: </h2>
      <h2 className="span-blink-score-gameover">00</h2>
      <div className="container-game-buttons">
        <button className="game-buttons">Play Again</button>
        <button className="game-buttons">Share Results</button>
      </div>
    </div>
  );
}
