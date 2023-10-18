import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { DataPublic } from "../context/DataPublicContext";

const ImageProfil = () => {
  const { dataProfil } = DataPublic();

  return <StyledImageProfil src={dataProfil.picture} alt="profil public" />;
};

export default ImageProfil;

const StyledImageProfil = styled.img`
  /* display: flex; */
  width: 30%;
  border-radius: 10px;
  @media screen and (max-width: 884px) {
    width: 40%;
  }
`;
