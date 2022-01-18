import { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Question from "./components/Question/Question";
import QuestionsData from "./resources/questions.json";
import Footer from "./components/UI/Footer";
import games from "./resources/games.json";
import ExpertPage from "./components/ExpertPage/ExpertPage";
import InterResult from "./components/InterResult/InterResult";

function App() {
  const [isFormShowing, setFormShowing] = useState(false);
  const [counter, setCounter] = useState(0);
  const [isStartPageShowing, setStartPageShowing] = useState(true);
  const [result, setResult] = useState({});
  const [expertshowing, setExpertShowing] = useState(false);

  const setValue = (type, value) => {
    setResult({ ...result, [type]: value });
  };

  useEffect(() => {
    if (!localStorage.games) {
      localStorage.games = JSON.stringify(games);
    }
  }, [games]);

  function toggleFormShowing() {
    setFormShowing((prevState) => !prevState);
  }

  function toggleStartPageShowing() {
    setStartPageShowing((prevState) => !prevState);
  }

  function toggleExpertPageShowing() {
    setExpertShowing((prevState) => !prevState);
  }

  return (
    <div className="App">
      <div className="main">
        {isStartPageShowing ? (
          <>
            {isFormShowing ? (
              <>
                <button onClick={toggleFormShowing} className="actionButton">
                  {"Перейти к использованию системы"}
                </button>
                {expertshowing ? (
                  <>
                    <button
                      onClick={toggleExpertPageShowing}
                      className="actionButton"
                    >
                      {"Авторизироваться"}
                    </button>
                    <ExpertPage quit={toggleExpertPageShowing} />
                  </>
                ) : (
                  <>
                    <button
                      onClick={toggleExpertPageShowing}
                      className="actionButton"
                    >
                      {"Войти в интерфейс пользователя"}
                    </button>
                    <Login quit={toggleFormShowing} />
                  </>
                )}
              </>
            ) : (
              <>
                <button onClick={toggleFormShowing} className="actionButton">
                  {"Войти в режим администрирования"}
                </button>
                <button onClick={toggleStartPageShowing} className="start">
                  {"Начать"}
                </button>
              </>
            )}
          </>
        ) : (
          <>
          {counter === QuestionsData.length ?  (
            <>
            <InterResult answers={result} />
            </>
          ) :  (
            <>
            <h1 onClick={() => console.log(result)}>Xb lf</h1>
          <button
            onClick={() => setCounter((prevCounter) => {
              if (prevCounter > 0) {
                return prevCounter - 1;
              }
            })}
            disabled={counter === 0}
            className="stepButton"
          >
            {"Назад"}
          </button>
            <Question
              questionText={QuestionsData[counter].questionText}
              answerVariants={QuestionsData[counter].answers}
              questionIndex={counter}
              type={QuestionsData[counter].type}
              changeValue={setValue}
              result={result}
            />
            <button
            onClick={() => setCounter((prevCounter) => {
              if (prevCounter < QuestionsData.length) {
                return prevCounter + 1;
              }
            })}
            className="stepButton"
          >
            {"Далее"}
          </button>
            </>
          )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
