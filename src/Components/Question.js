import React from "react";
import wrongAnswers from "../Data/wrongAnswers";
import rightAnswers from "../Data/rightAnswers";

export default function Question() {
  const right = rightAnswers;
  const wrong = wrongAnswers;

  function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function createRandomQuestion(wrongList, rightList) {
    const wrongCollectionIndex = [];
    //get three wrong answer indexes
    for (let i = 0; i < 3; i++) {
      wrongCollectionIndex.push(getRandomNumber(0, wrongList.length - 1));
    }

    //get those wrong answers in an array
    const question = wrongCollectionIndex.map((item) => {
      return wrongList[item];
    });

    //add that right answer to the question object
    question.push(rightList[getRandomNumber(0, rightList.length)]);

    //validate 3 wrong answers and 1 right answer
    console.log(question);
    return question;
  }

  const question = createRandomQuestion(wrong, right);

  return (
    <section className="container">
      <div className="question-container">
        {question.map((item) => {
          return <div>{item.answer}</div>;
        })}
      </div>
    </section>
  );
}
