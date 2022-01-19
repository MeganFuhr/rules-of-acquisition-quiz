import React from "react";
import { useGlobalContext } from "../Context";

export default function Score() {
  const { score, questionCount, latinumDisplay } = useGlobalContext();
  return (
    <>
      <div className="display-score">
        <h4 className="display-question-count-left">
          Question {questionCount} of 10
        </h4>
        <h4 className="display-score-right">Latinum Bars: {score}</h4>
      </div>
      <div className="another-div">
        <div className="display-latinum">{latinumDisplay}</div>
      </div>
    </>
  );
}
