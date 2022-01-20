import React from "react";
import Score from "./Score";
import { useGlobalContext } from "../Context";

export default function EndGame() {
  const {
    setScore,
    setQuestionCount,
    setLatinumDisplay,
    setGameOver,
    score,
    latinumResults,
    setLatinumResults,
  } = useGlobalContext();

  function updateClipboard(num, results) {
    const display = `${num}/10 \n${results.join("")}`;
    navigator.clipboard.writeText(display).then(
      function () {
        //TODO ...
      },
      function () {
        console.log("Clipboard set failed!");
      }
    );
  }

  const handlePlayAgain = () => {
    setScore(0);
    setQuestionCount(1);
    setLatinumDisplay([]);
    setGameOver(false);
    setLatinumResults([]);
  };
  return (
    <article>
      <Score />
      <div className="div-question container div-gameover container">
        <h1>Game Over !</h1>
        <h1>Latinum Bars Acquired: </h1>
        <h1 className="blink-score-gameover" style={{ fontSize: "5rem" }}>
          {score}
        </h1>
        <div className="container-game-buttons">
          <button
            className="game-buttons"
            aria-label="Play again"
            onClick={handlePlayAgain}
          >
            Play Again
          </button>
          <button
            className="game-buttons"
            aria-label="Share Results"
            onClick={() => updateClipboard(score, latinumResults)}
          >
            Share Results
          </button>
        </div>
      </div>
    </article>
  );
}
