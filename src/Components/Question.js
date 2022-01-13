import React from "react";
import wrongAnswers from "../Data/wrongAnswers";
import rightAnswers from "../Data/rightAnswers";

const right = rightAnswers;
const wrong = wrongAnswers;

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function shuffle(array) {
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
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

  //shuffle the array
  const newQuestion = shuffle(question);
  return newQuestion;
}

const questionToDisplay = createRandomQuestion(wrong, right);
console.log("Question Collection", questionToDisplay);
const ruleNumber = questionToDisplay.filter((item) => {
  return item.isCorrect === true;
});
console.log("Correct Rule", ruleNumber);

export default function Question() {
  return (
    <section className="container">
      {console.log(questionToDisplay)}
      <div className="question-container">
        <p>{ruleNumber.id}</p>
        {questionToDisplay.map((item) => {
          return <p key={item.id}>{item.answer}</p>;
        })}
      </div>
    </section>
  );
}
