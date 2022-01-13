import React from "react";
import wrongAnswers from "../Data/wrongAnswers";
import rightAnswers from "../Data/rightAnswers";
import { createRandomQuestion } from "../Functions/Functions";

const questionToDisplay = createRandomQuestion(wrongAnswers, rightAnswers);

const ruleNumber = questionToDisplay.filter((item) => {
  return item.isCorrect === true;
});

console.log("Correct Rule", ruleNumber);

export default function Question() {
  return (
    <section className="container">
      <div className="question-container">
        <h2>Rule {ruleNumber[0].id}</h2>

        {questionToDisplay.map((item) => {
          return <p key={item.id}>{item.answer}</p>;
        })}
      </div>
    </section>
  );
}
