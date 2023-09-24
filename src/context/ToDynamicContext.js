import axios from "axios";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

const ToDynamicContext = createContext();

export const ToDynamicContextProvider = ({ children }) => {
  const [idUser, setIdUser] = useState(null);
  const [user, setUser] = useState(null);
  const [popChange, setPopChange] = useState(false);
  const [alert, setAlert] = useState(null);
  const [spin, setSpin] = useState(false);
  useEffect(() => {
    const checkIpFirstTime = async () => {
      try {
        await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_URI}jwtid`,
          withCredentials: true,
        }).then((res) => {
          console.log(res);
          if (res.data._id) {
            setUser(res.data);
          }
          if (res.data.redirection) {
            return (window.location.href = "https://www.google.com");
          }
        });
      } catch (error) {
        console.log(error);
      }

      //si idUse alors navigue
    };
    checkIpFirstTime();
  }, [idUser]);

  return (
    <ToDynamicContext.Provider
      value={{
        spin,
        setSpin,
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
