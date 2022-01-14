import React, { useState } from "react";
import wrongAnswers from "../Data/wrongAnswers";
import rightAnswers from "../Data/rightAnswers";
import { createRandomQuestion } from "../Functions/Functions";
import CorrectScore from "./CorrectScore";
import IncorrectScore from "./IncorrectScore";

export default function Question() {
  const questionToDisplay = createRandomQuestion(wrongAnswers, rightAnswers);

  const ruleNumber = questionToDisplay.filter((item) => {
    return item.isCorrect === true;
  });

  const [currentQuestion, setCurrentQuestion] = useState(questionToDisplay);
  return (
    <section className="container">
      <div className="question-container">
        <div className="display-score">
          <h4 className="display-question-count-left">Question 1 of 10</h4>
          <h4 className="display-score-right">Score: 10</h4>
        </div>
        <div className="display-latinum">
          <IncorrectScore />
          <IncorrectScore />
          <CorrectScore />
          <CorrectScore />
          <IncorrectScore />
          <CorrectScore />
          <CorrectScore />
          <IncorrectScore />
          <IncorrectScore />
          <CorrectScore />
        </div>
        <div className="question-card">
          <h2>Rule {ruleNumber[0].id}</h2>
          {currentQuestion.map((item) => {
            return (
              <button
                className="question-answer-button"
                key={item.id}
                onClick={() => setCurrentQuestion}
              >
                {item.answer}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
