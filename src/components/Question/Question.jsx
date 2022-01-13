import React from "react";
import InterResult from "../InterResult/InterResult";
import "../Question/Question.css";

function Question({ questionText, answerVariants, questionIndex }) {
  return (
    <>
      <div>
        <h1>{questionText}</h1>
        <select>
          {answerVariants.map((answer, key) => (
            <option value={answer.text} key={key}>
              {answer.description}
            </option>
          ))}
        </select>
      </div>

      {questionIndex !== 1 && <InterResult />}
    </>
  );
}

export default Question;
