import React from "react";
import wrongAnswers from "../Data/wrongAnswers";
import rightAnswers from "../Data/rightAnswers";
import { createRandomQuestion } from "../Functions/Functions";
import CorrectScore from "./CorrectScore";
import IncorrectScore from "./IncorrectScore";

const questionToDisplay = createRandomQuestion(wrongAnswers, rightAnswers);

const ruleNumber = questionToDisplay.filter((item) => {
  return item.isCorrect === true;
});

console.log("Correct Rule", ruleNumber);

export default function Question() {
  return (
    <section className="container">
      <div className="question-container">
        <div className="display-score">
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
        <h2>Rule {ruleNumber[0].id}</h2>
        {questionToDisplay.map((item) => {
          return <p key={item.id}>{item.answer}</p>;
        })}
      </div>
    </section>
  );
}
