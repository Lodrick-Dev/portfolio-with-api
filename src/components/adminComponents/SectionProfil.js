import React from "react";
import { styled } from "styled-components";
import FormProfil from "../formsAdmin/FormProfil";
import Profil from "../Profil";

const SectionProfil = () => {
  return (
    <StyledSectionProfil>
      <FormProfil />
      <Profil />
    </StyledSectionProfil>
  );
};

export default SectionProfil;
const StyledSectionProfil = styled.section`
  background: darkolivegreen;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  //428px iphone 13 pro max
  @media screen and (max-width: 428px) {
    flex-direction: column;
  }
`;
