import React, { useState } from "react";
import "../Login/Login.scss";

function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function handleChangeLogin() {}
  function handleChangePassword() {}

  return (
    <form>
      <input type={"text"} placeholder={"Введите логин"} />
      <input type={"password"} placeholder={"Введите пароль"} />
    </form>
  );
}

export default Login;
