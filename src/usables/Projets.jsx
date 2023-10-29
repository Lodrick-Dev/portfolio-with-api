import React, { forwardRef } from "react";
import { styled } from "styled-components";

const Projets = (props, ref) => {
  return (
    <StyledProjets id="projet-composant" ref={ref}>
      Pas encore de projets digne de ce nom 😆 mais j'y travaille. Ce port
      Portfolio est un MERN PROJET 😎 non responsive pour l'instant 😥
    </StyledProjets>
  );
};

export default forwardRef(Projets);

const StyledProjets = styled.div`
  height: 100vh;
`;
