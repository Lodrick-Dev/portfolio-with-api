import { createContext, useContext, useState } from "react";

const ToDynamicContext = createContext();

export const ToDynamicContextProvider = ({ children }) => {
  const [idUser, setIdUser] = useState(null);
  const [user, setUser] = useState(null);
  const [popChange, setPopChange] = useState(false);
  const [alert, setAlert] = useState(null);
  return (
    <ToDynamicContext.Provider
      value={{
        popChange,
        setPopChange,
        idUser,
        setIdUser,
        user,
        setUser,
        setAlert,
        alert,
      }}
    >
      {children}
    </ToDynamicContext.Provider>
  );
};

export const Dynamic = () => {
  return useContext(ToDynamicContext);
};
