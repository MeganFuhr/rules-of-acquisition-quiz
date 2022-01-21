import React, { useState } from "react";
import { createQuestionStack } from "../Functions/Functions";
import wrongAnswers from "../Data/wrongAnswers";
import rightAnswers from "../Data/rightAnswers";
import CorrectScore from "./CorrectScore";
import IncorrectScore from "./IncorrectScore";
import Score from "./Score";
import { useGlobalContext } from "../Context";

const latinum = "🟨";
const noLatinum = "❌";
// const wrong = createCollection(wrongAnswers, 30);
// const right = createCollection(rightAnswers, 10);
// const questionStack = joinCollections(wrong, right);

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
  const [questionStack, setQuestionStack] = useState(
    createQuestionStack(rightAnswers, wrongAnswers, 10, 30)
  );

  //get the rule number to display
  const ruleNumber = questionStack[currentQuestion].filter((item) => {
    return item.isCorrect === true;
  });

  const handleAnswer = (answer) => {
    //update the question count
    setQuestionCount((prev) => {
      if (questionCount === 10) {
        setGameOver(true);
        setQuestionStack(
          createQuestionStack(rightAnswers, wrongAnswers, 10, 30)
        );
        return 10;
      }
      return prev + 1;
    });

    //if isCorrect: true, add score and display latinum
    if (answer.isCorrect) {
      //update score
      setScore((prev) => prev + 1);
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
    <article>
      <div className="question-container">
        <Score />
        <div className="question-card">
          <h2 aria-label={`Rule ${ruleNumber[0].ruleNumber}`}>
            Rule {ruleNumber[0].ruleNumber}
          </h2>
          <fieldset>
            {questionStack[currentQuestion].map((item) => {
              return (
                <form>
                  <button
                    key={item.id}
                    className="question-answer-button"
                    onClick={() => handleAnswer(item)}
                    aria-label={item.answer}
                  >
                    {item.answer}
                  </button>
                </form>
              );
            })}
          </fieldset>
        </div>
      </div>
    </article>
  );
}
