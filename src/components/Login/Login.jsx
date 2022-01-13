import React, { useState } from "react";
import "../Login/Login.css";

function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <input type={"text"} placeholder={"Введите логин"} />
      <input type={"password"} placeholder={"Введите пароль"} />
    </form>
  );
}

export default Login;
