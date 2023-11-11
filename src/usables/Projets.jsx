import React, { forwardRef } from "react";
import { styled } from "styled-components";
import ProjetPublic from "../pages/home/ProjetsPublic";

const Projets = (props, ref) => {
  return (
    <StyledProjets id="projet-composant" ref={ref}>
      {/* Pas encore de projets digne de ce nom 😆 mais j'y travaille. Ce port
      Portfolio est un MERN PROJET 😎 non responsive pour l'instant 😥. update
      le 06/11/2023 aujourd'hui je peux dire que le coté front/public est
      responsive mais pas le coté administrateur 🤧.. bref toujours pas de réel
      projet pourtant il est en cours */}
      <ProjetPublic />
    </StyledProjets>
  );
};

export default forwardRef(Projets);

const StyledProjets = styled.div`
  height: 100vh;
`;
