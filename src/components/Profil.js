import React, { useEffect } from "react";
import Skills from "../usables/Skills";
import styled from "styled-components";
import axios from "axios";
import Description from "../usables/Description";
import { DataPublic } from "../context/DataPublicContext";
import ImageProfil from "../usables/ImageProfil";
import TitleLarge from "../usables/TitleLarge";
import { ScrollSection } from "../context/ScrollSectionContext";
import Spin from "./Spin";

const Profil = () => {
  // const { setDataProfil } = DataPublic();
  // const { setDataProfilStatic } = DataPublic();
  const { dataProfil } = DataPublic();
  const { location } = ScrollSection();
  // console.log(location.pathname);
  // useEffect(() => {
  //   const getDataProfil = async () => {
  //     try {
  //       await axios({
  //         method: "get",
  //         url: `${process.env.REACT_APP_API_URI}user/static`,
  //         withCredentials: true,
  //       }).then((res) => {
  //         setDataProfil(res.data);
  //         setDataProfilStatic(res.data);
  //         console.log(res);
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getDataProfil();
  // }, []);

  return (
    <StyledProfil id="profil-composant" $location={location.pathname}>
      <div className="sous-container-profil">
        <ImageProfil />
        <div>
          <TitleLarge text={dataProfil.title} />
          <Description dataProfil={dataProfil} />
          {location.pathname !== "/admin" && <Skills />}
        </div>
      </div>
    </StyledProfil>
  );
};

export default Profil;
const StyledProfil = styled.div`
  background: url("./items/background1.jpg");
  background-size: cover;
  background-position: center;
  backdrop-filter: blur(10px);
  height: ${({ $location }) => ($location === "/admin" ? "50vh" : "100vh")};
  width: ${({ $location }) => ($location === "/admin" ? "50%" : "100%")};
  display: flex;
  justify-content: center;
  align-items: center;
  .sous-container-profil {
    /* height: 70vh; */
    height: ${({ $location }) => ($location === "/admin" ? "35vh" : "70vh")};
    background: rgba(115, 113, 113, 0.67);
    backdrop-filter: blur(3px);
    width: 80%;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .sous-container-profil > div {
    width: 50%;
    height: 90%;
    background: red;
    display: flex;
    flex-direction: column;
  }
`;
