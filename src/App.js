import { useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";

function App() {
  const [isFormShowing, setFormShowing] = useState(false);

  function toggleFormShowing() {
    setFormShowing((prevState) => !prevState);
  }

  return (
    <div className="App">
      <button onClick={toggleFormShowing}>
        {"Войти в режим администрирования"}
      </button>
      {isFormShowing ? <Login /> : <button>{"Начать"}</button>}
    </div>
  );
}

export default App;
