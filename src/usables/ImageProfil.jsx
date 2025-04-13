import React from "react";
import { styled } from "styled-components";
import { DataPublic } from "../context/DataPublicContext";
import { Dynamic } from "../context/ToDynamicContext";
import { COLORS } from "./COLORS";

const ImageProfil = () => {
  const { dataProfil } = DataPublic();
  const { location } = Dynamic();

  return (
    <StyledImageProfil
      src={dataProfil.picture}
      alt="profil public"
      className="animate__animated animate__rubberBand "
      $location={location.pathname}
    />
  );
};

export default ImageProfil;

const StyledImageProfil = styled.img`
  /* display: flex; */
  width: 350px;
  height: 350px;
  border-radius: 50%;
  border: 2px solid ${COLORS.accent};
  box-shadow: 0 0 25px rgba(0, 255, 213, 0.5);
  @media screen and (max-width: 884px) {
    /* width: 30%; */
  }
  //428px iphone 13 pro max
  @media screen and (max-width: 445px) {
    margin-top: 50px;
    width: 120px;
    height: 120px;
    /* width: 60%; */
    /* width: ${({ $location }) => ($location === "/admin" ? "30%" : "60%")}; */
  }
`;
