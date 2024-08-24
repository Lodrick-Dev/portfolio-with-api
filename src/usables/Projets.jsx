import React, { forwardRef } from "react";
import { styled } from "styled-components";
import ProjetPublic from "../pages/home/ProjetsPublic";

const Projets = (props, ref) => {
  return (
    <StyledProjets id="projet-composant" ref={ref}>
      <ProjetPublic />
    </StyledProjets>
  );
};

export default forwardRef(Projets);

const StyledProjets = styled.div`
  height: 100vh;
  @media screen and (max-width: 429px) {
    width: 100%;
  }
`;
