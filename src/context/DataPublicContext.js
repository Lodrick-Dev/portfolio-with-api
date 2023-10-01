import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { Dynamic } from "./ToDynamicContext";

const DataPublicContext = createContext();

export const DataPublicContextProvider = ({ children }) => {
  const [dataProfil, setDataProfil] = useState([]);
  const [dataProfilStatic, setDataProfilStatic] = useState([]);
  const [skillsPublic, setSkillsPublic] = useState([]);
  const [listProjets, setListProjets] = useState([]);
  const [callAgain, setCallAgain] = useState(false);
  const [callAfter, setCallAfter] = useState(false);

  useEffect(() => {
    const goFetchSkills = async () => {
      try {
        await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_URI}skill/all`,
          withCredentials: true,
        }).then((res) => {
          setSkillsPublic(res.data);
          console.log(res);
        });
      } catch (error) {
        console.log(error);
      }
    };
    goFetchSkills();
    const getDataProfil = async () => {
      try {
        await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_URI}user/static`,
          withCredentials: true,
        }).then((res) => {
          setDataProfil(res.data);
          setDataProfilStatic(res.data);
          // console.log(res);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getDataProfil();
    const getAllProjets = async () => {
      try {
        await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_URI}contents/all`,
          withCredentials: true,
        }).then((res) => {
          console.log(res);
          setListProjets(res.data);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getAllProjets();
  }, [callAgain, callAfter]);

  return (
    <DataPublicContext.Provider
      value={{
        dataProfil,
        setDataProfil,
        skillsPublic,
        dataProfilStatic,
        setDataProfilStatic,
        listProjets,
        setListProjets,
        callAgain,
        setCallAgain,
        callAfter,
        setCallAfter,
      }}
    >
      {children}
    </DataPublicContext.Provider>
  );
};
export const DataPublic = () => {
  return useContext(DataPublicContext);
};
