import React, { forwardRef } from "react";
import { styled } from "styled-components";

const Projets = (props, ref) => {
  return (
    <StyledProjets id="projet-composant" ref={ref}>
      Projets
    </StyledProjets>
  );
};

export default forwardRef(Projets);

const StyledProjets = styled.div`
  height: 100vh;
`;
