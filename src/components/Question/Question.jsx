import React, { useState, useEffect} from "react";
import InterResult from "../InterResult/InterResult";
import "../Question/Question.css";

function Question({ questionText, answerVariants, questionIndex, type, changeValue, result,}) {
 
  const [value, setValue] = useState(answerVariants[0].text);

  useEffect(() => {
    console.log(result);
    changeValue(type,value);
  }, [value])


  return (
    <>
      <div className="question">
        <h2 className="title">{questionText}</h2>
        <select value={value} onChange={(e) => {setValue(e.target.value);} } className="question_select">
          {answerVariants.map((answer, key) => (
            <option value={answer.text}  key={key}>
              {answer.description}
            </option>
          ))}
        </select>
      </div>

      {questionIndex !== 0 && <InterResult answers={result} />}
    </>
  );
}

export default Question;
