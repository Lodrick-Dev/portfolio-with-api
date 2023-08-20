import React from "react";
import { styled } from "styled-components";
import FormSkills from "../formsAdmin/FormSkills";
import Skills from "../../usables/Skills";
const SectionSKills = () => {
  return (
    <StyledSectionSKills>
      <Skills />
      <FormSkills />
    </StyledSectionSKills>
  );
};

export default SectionSKills;
const StyledSectionSKills = styled.section`
  background: grey;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
