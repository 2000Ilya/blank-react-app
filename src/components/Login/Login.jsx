import React, { useState } from "react";
import "../Login/Login.css";

function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onChangeLogin = (e) => {
    const login = e.target.value;
    setLogin(login);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (login === "qwerty" && password === "123") {
      localStorage.setItem("isAuth", JSON.stringify(true));
    }
  };

  return (
    <form onSubmit={handleLogin} style={{'borderColor': `${localStorage.getItem('isAuth')? "green" : "black"}`}}>
      <input
        type={"text"}
        placeholder={"Введите логин"}
        onChange={onChangeLogin}
        value={login}
      />
      <input
        type={"password"}
        placeholder={"Введите пароль"}
        onChange={onChangePassword}
        value={password}
      />
      <button type={"submit"}>{"Авторизоваться"}</button>
    </form>
  );
}

export default Login;
