import React, { useState } from "react";
import { styled } from "styled-components";
import FormProfil from "../formsAdmin/FormProfil";
import PreviewProfil from "./PreviewProfil";
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
  background: pink;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
`;
