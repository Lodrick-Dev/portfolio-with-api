import axios from "axios";
import { useEffect, useRef } from "react";
import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ToDynamicContext = createContext();

export const ToDynamicContextProvider = ({ children }) => {
  const location = useLocation();
  const [idUser, setIdUser] = useState(null);
  const [user, setUser] = useState(null);
  const [popChange, setPopChange] = useState(false);
  const [alert, setAlert] = useState(null);
  const [spin, setSpin] = useState(false);
  const [skillsSelect, setSkillsSelect] = useState([]);
  const navigue = useNavigate();
  // const tokenCRSF = async () => {
  //   try {
  //     await axios({
  //       method: "get",
  //       url: `${process.env.REACT_APP_API_URI}`,
  //       withCredentials: true,
  //     }).then((res) => {
  //       console.log(res.data.token);
  //       setToken(res.data.token);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
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
            setIdUser(res.data._id);
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
    // tokenCRSF();
  }, [idUser]);

  return (
    <ToDynamicContext.Provider
      value={{
        skillsSelect,
        setSkillsSelect,
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
        navigue,
        location,
      }}
    >
      {children}
    </ToDynamicContext.Provider>
  );
};

export const Dynamic = () => {
  return useContext(ToDynamicContext);
};
