import { useState } from "react";

const useToken = () => {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString!);
    return userToken?.token;
  };

  const [token, setToken] = useState<string | undefined>(getToken());

  const saveToken = (userToken: { token: string }) => {
    sessionStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return { setToken: saveToken, token };
};

export default useToken;