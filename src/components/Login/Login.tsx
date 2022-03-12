import React, { useRef } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "./Login.css";

const loginUser = async (credentials: {
  username: string;
  password: string;
}): Promise<{ token: string }> => {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
};

interface ILoginProps {
  setToken: (userToken: { token: string }) => void;
}

const Login: React.FC<ILoginProps> = ({ setToken }) => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    if (!username || !password) return;

    const token = await loginUser({ username, password });

    setToken(token);
  };

  return (
    <div className="login-wrapper">
      <h1>Пожалуйста, войдите</h1>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: 225,
          "& .MuiTextField-root": { m: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          required
          id="username"
          label="Имя пользователя"
          type="text"
          inputRef={usernameRef}
        />
        <TextField
          required
          id="password"
          label="Пароль"
          type="password"
          autoComplete="current-password"
          inputRef={passwordRef}
        />
        <Button variant="contained" type="submit" sx={{ m: 1, width: "100%" }}>
          Войти
        </Button>
      </Box>
    </div>
  );
};

export default Login;
