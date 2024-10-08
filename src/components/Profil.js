import React, { forwardRef } from "react";
import Skills from "../usables/Skills";
import styled from "styled-components";
import Description from "../usables/Description";
import { DataPublic } from "../context/DataPublicContext";
import ImageProfil from "../usables/ImageProfil";
import TitleLarge from "../usables/TitleLarge";
import { Dynamic } from "../context/ToDynamicContext";

const Profil = (props, ref) => {
  const { dataProfil } = DataPublic();
  const { location } = Dynamic();

  //$ devant location pour qu'on le passe uniquement dans le css
  //car react veut l'envoyer en front
  return (
    <StyledProfil id="profil-composant" $location={location.pathname} ref={ref}>
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

//props, ref et forwardRef pour qu'on puisse définir un useRef depuis là
//où le composant (Contact) est appelé, ici dans component Home.
export default forwardRef(Profil);
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
    height: ${({ $location }) => ($location === "/admin" ? "35vh" : "80vh")};
    background: rgba(115, 113, 113, 0.67);
    backdrop-filter: blur(3px);
    width: 80%;
    padding: 10px;
    border-radius: 15px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .sous-container-profil > div {
    width: 50%;
    height: 90%;
    padding: 15px;
    border-radius: 15px;
    /* background: red; */
    background: #2d5092;
    display: flex;
    flex-direction: column;
  }
  //responsive
  //884px = 768px
  @media screen and (max-width: 884px) {
    .sous-container-profil {
      width: 90%;
      padding: 5px;
      justify-content: space-around;
      height: ${({ $location }) => ($location === "/admin" ? "45vh" : "80vh")};
    }
    .sous-container-profil > div {
      /* height: 50%; */
      height: ${({ $location }) => ($location === "/admin" ? "70%" : "50%")};
      width: 65%;
    }
  }

  //428px iphone 13 pro max
  @media screen and (max-width: 429px) {
    width: ${({ $location }) => ($location === "/admin" ? "90%" : "100%")};
    .sous-container-profil {
      width: 95%;
      flex-direction: column;
      height: ${({ $location }) => ($location === "/admin" ? "45vh" : "90vh")};
    }
    .sous-container-profil > div {
      width: 95%;
      height: ${({ $location }) => ($location === "/admin" ? "65%" : "60%")};
    }
  }
`;
