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
`;
