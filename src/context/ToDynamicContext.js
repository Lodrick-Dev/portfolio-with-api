import axios from "axios";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

const ToDynamicContext = createContext();

export const ToDynamicContextProvider = ({ children }) => {
  const [idUser, setIdUser] = useState(null);
  const [user, setUser] = useState(null);
  const [popChange, setPopChange] = useState(false);
  const [alert, setAlert] = useState(null);
  useEffect(() => {
    const checkIpFirstTime = async () => {
      try {
        await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_URI}jwtid`,
          withCredentails: true,
        }).then((res) => {
          console.log(res);
          if (res.data.redirection) {
            return (window.location.href = "https://www.google.com");
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
    checkIpFirstTime();
  }, [idUser]);

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
