import { createContext, useContext, useState } from "react";

const ToDynamicContext = createContext();

export const ToDynamicContextProvider = ({ children }) => {
  const [popChange, setPopChange] = useState(false);
  return (
    <ToDynamicContext.Provider value={{ popChange, setPopChange }}>
      {children}
    </ToDynamicContext.Provider>
  );
};

export const Dynamic = () => {
  return useContext(ToDynamicContext);
};
