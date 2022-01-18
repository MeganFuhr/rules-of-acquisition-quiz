import React, { useState } from "react";
import wrongAnswers from "../Data/wrongAnswers";
import rightAnswers from "../Data/rightAnswers";
import { createQuestionStack, createCollection } from "../Functions/Functions";
import CorrectScore from "./CorrectScore";
import IncorrectScore from "./IncorrectScore";
import Score from "./Score";
import { useGlobalContext } from "../Context";

const wrong = createCollection(wrongAnswers, 30);
const right = createCollection(rightAnswers, 10);
const questionStack = createQuestionStack(wrong, right);

const latinum = "🟨";
const noLatinum = "❌";

export default function Question() {
  const {
    questionCount,
    latinumDisplay,
    setScore,
    setQuestionCount,
    setLatinumDisplay,
    setGameOver,
    latinumResults,
    setLatinumResults,
  } = useGlobalContext();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  //get the rule number to display
  const ruleNumber = questionStack[currentQuestion].filter((item) => {
    return item.isCorrect === true;
  });

  const handleAnswer = (answer) => {
    //update the question count
    setQuestionCount((prev) => {
      if (questionCount === 10) {
        setGameOver(true);
        return 10;
      }
      return prev + 1;
    });

    //if isCorrect: true, add score and display latinum
    if (answer.isCorrect) {
      //update score
      setScore((prev) => prev + 10);
      //update latinum display
      setLatinumDisplay([...latinumDisplay, <CorrectScore />]);
      setLatinumResults([...latinumResults, latinum]);
    } else {
      //update latinum display
      setLatinumDisplay([...latinumDisplay, <IncorrectScore />]);
      setLatinumResults([...latinumResults, noLatinum]);
    }

    //display new question
    setCurrentQuestion((prev) => {
      if (prev + 1 === 10) {
        return 10;
      }
      return prev + 1;
    });
    //check if question after score is updated.
  };

  return (
    <>
      <div className="question-container">
        <Score />
        <div className="question-card">
          <h2>Rule {ruleNumber[0].ruleNumber}</h2>
          {questionStack[currentQuestion].map((item) => {
            return (
              <button
                key={item.id}
                className="question-answer-button"
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
