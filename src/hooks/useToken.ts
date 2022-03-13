import { useState } from "react";

const useToken = () => {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString!);
    return userToken?.token;
  };

  const [token, setToken] = useState<string | undefined>(getToken());

  const saveToken = (userToken: { token: string }) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
  };

  const clearToken = () => {
    localStorage.removeItem("token");
    setToken(undefined);
  };

  return { setToken: saveToken, token, clearToken };
};

export default useToken;
