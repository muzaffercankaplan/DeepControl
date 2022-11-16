import { useState, createContext, useEffect } from "react";

export const MainContext = createContext({});

const MainProvider = ({ children }) => {
  const formValidation = {
    name: "",
    email: "",
    password: "",
    isLogIn: false,
  };
  const [userLogin, setUserLogin] = useState(false);
  const [userInfo, setUserInfo] = useState(formValidation);

  return (
    <MainContext.Provider
      value={{
        userLogin,
        setUserLogin,
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
