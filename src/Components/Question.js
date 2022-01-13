import React from "react";
import wrongAnswers from "../Data/wrongAnswers";
import rightAnswers from "../Data/rightAnswers";
import { createRandomQuestion } from "../Functions/Functions";

//set variables for data
const right = rightAnswers;
const wrong = wrongAnswers;

//build question
const questionToDisplay = createRandomQuestion(wrong, right);

const ruleNumber = questionToDisplay.filter((item) => {
  return item.isCorrect === true;
});

console.log("Correct Rule", ruleNumber);

export default function Question() {
  return (
    <section className="container">
      <div className="question-container">
        <p>Which rule is {ruleNumber[0].id}</p>

        {questionToDisplay.map((item) => {
          return <p key={item.id}>{item.answer}</p>;
        })}
      </div>
    </section>
  );
}
