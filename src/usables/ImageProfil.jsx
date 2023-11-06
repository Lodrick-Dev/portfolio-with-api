import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { DataPublic } from "../context/DataPublicContext";

const ImageProfil = () => {
  const { dataProfil } = DataPublic();

  return (
    <StyledImageProfil
      src={dataProfil.picture}
      alt="profil public"
      className="animate__animated animate__rubberBand "
    />
  );
};

export default ImageProfil;

const StyledImageProfil = styled.img`
  /* display: flex; */
  width: 30%;
  border-radius: 10px;
  @media screen and (max-width: 884px) {
    width: 40%;
  }
  //428px iphone 13 pro max
  @media screen and (max-width: 428px) {
    width: 60%;
  }
`;
