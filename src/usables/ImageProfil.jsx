import React from "react";
import { styled } from "styled-components";
import { DataPublic } from "../context/DataPublicContext";
import { Dynamic } from "../context/ToDynamicContext";

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
  width: 30%;
  border-radius: 10px;
  @media screen and (max-width: 884px) {
    width: 30%;
  }
  //428px iphone 13 pro max
  @media screen and (max-width: 428px) {
    /* width: 60%; */
    width: ${({ $location }) => ($location === "/admin" ? "30%" : "60%")};
  }
`;
