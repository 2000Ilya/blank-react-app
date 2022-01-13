import { useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Question from "./components/Question/Question";
import QuestionsData from "./resources/questions.json";

function App() {
  const [isFormShowing, setFormShowing] = useState(false);
  const [counter, setCounter] = useState(1);
  const [isStartPageShowing, setStartPageShowing] = useState(true);

  function toggleFormShowing() {
    setFormShowing((prevState) => !prevState);
  }

  function toggleStartPageShowing() {
    console.log("хайп")
    setStartPageShowing((prevState) => !prevState);
  }

  return (
    <div className="App">
      {isStartPageShowing ? (
        <>
          {isFormShowing ? (
            <>
              <button onClick={toggleFormShowing}>
                {"Перейти к использованию системы"}
              </button>
              <Login />
            </>
          ) : (
            <>
              <button onClick={toggleFormShowing}>
                {"Войти в режим администрирования"}
              </button>
              <button onClick={toggleStartPageShowing}>{"Начать"}</button>
            </>
          )}
        </>
      ) : (
        <>
          <button
            onClick={setCounter((prevCounter) => {
              if (prevCounter > 1) {
                return prevCounter - 1;
              }
            })}
            disabled={counter === 1}
          >
            {"Назад"}
          </button>

          <Question
            questionText={QuestionsData.questionText}
            answerVariants={QuestionsData.answers}
            questionIndex={counter}
          />

          <button
            onClick={setCounter((prevCounter) => {
              if (prevCounter < QuestionsData.length) {
                return prevCounter + 1;
              }
            })}
            disabled={counter === QuestionsData.length}
          >
            {"Далее"}
          </button>
        </>
      )}
    </div>
  );
}

export default App;
