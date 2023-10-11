import React from "react";
import styled from "styled-components";
import FormPassword from "../formsAdmin/FormPassword";
import TitleMedium from "../../usables/TitleMedium";

const SectionPassword = () => {
  return (
    <StyledSectionPassword>
      <TitleMedium text={"Mise à jour du mot de passe"} />
      <FormPassword />
    </StyledSectionPassword>
  );
};

export default SectionPassword;

const StyledSectionPassword = styled.section`
  height: 50vh;
  display: flex;
  background: grey;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
