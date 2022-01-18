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
  } = useGlobalContext();

  function updateClipboard(num, results) {
    const score = num / 10;
    const display = `${score}/10 \n${results.join("")}`;
    navigator.clipboard.writeText(display).then(
      function () {
        console.log("Success!");
      },
      function () {
        console.log("Failed!");
      }
    );
  }

  const handlePlayAgain = () => {
    setScore(0);
    setQuestionCount(1);
    setLatinumDisplay([]);
    setGameOver(false);
  };
  return (
    <>
      <Score />
      <div className="div-question container div-gameover container">
        <h1>Game Over !</h1>
        <h2>Latinum Bars Acquired: </h2>
        <h2 className="span-blink-score-gameover">{score / 10}</h2>
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
    </>
  );
}
