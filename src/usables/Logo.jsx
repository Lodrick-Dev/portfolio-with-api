import React from "react";
import { styled } from "styled-components";

const Logo = ({ actionClick }) => {
  return (
    <StyledLogo onClick={actionClick} src="./items/logo.svg" alt="Le profil" />
  );
};

export default Logo;
const StyledLogo = styled.img`
  width: 5%;
  position: fixed;
  top: 10px;
  right: 5px;
  z-index: 10;
  cursor: pointer;
`;
