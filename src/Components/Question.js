import React, { useState } from "react";
import wrongAnswers from "../Data/wrongAnswers";
import rightAnswers from "../Data/rightAnswers";
import { createRandomQuestion } from "../Functions/Functions";
import CorrectScore from "./CorrectScore";
import IncorrectScore from "./IncorrectScore";

export default function Question() {
  const [latinumDisplay, setLatinumDisplay] = useState([]);
  const [score, setScore] = useState(0);
  const [questionCount, setQuestionCount] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(
    createRandomQuestion(wrongAnswers, rightAnswers)
  );

  //get the rule number to display
  const ruleNumber = currentQuestion.filter((item) => {
    return item.isCorrect === true;
  });

  const handleAnswer = (answer) => {
    console.log("Inside handleAnswer function.");
    //check if question limit of 10 is reached - if so, display score or something. offer retry.
    if (questionCount > 9) {
      alert("Game Over");
      setScore(0);
      setQuestionCount(1);
      setLatinumDisplay([]);
      return;
    }
    //update the question count
    setQuestionCount((prev) => prev + 1);

    //if isCorrect: true, add score and display latinum
    if (answer.isCorrect) {
      //update score
      setScore((prev) => prev + 10);
      //update latinum display
      setLatinumDisplay([...latinumDisplay, <CorrectScore />]);
    } else {
      //update latinum display
      setLatinumDisplay([...latinumDisplay, <IncorrectScore />]);
    }
    //display new question
    setCurrentQuestion(createRandomQuestion(wrongAnswers, rightAnswers));
  };

  return (
    <>
      <div className="question-container">
        <div className="display-score">
          <h4 className="display-question-count-left">
            Question {questionCount} of 10
          </h4>
          <h4 className="display-score-right">Score: {score}</h4>
        </div>
        <div className="display-latinum">{latinumDisplay}</div>
        <div className="question-card">
          <h2>Rule {ruleNumber[0].id}</h2>
          {currentQuestion.map((item) => {
            return (
              <button
                className="question-answer-button"
                key={item.id}
                onClick={() => handleAnswer(item)}
                aria-label={item.answer}
              >
                {item.answer}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
