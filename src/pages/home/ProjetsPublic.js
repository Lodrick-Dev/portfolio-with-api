import React from "react";
import styled from "styled-components";
import { DataPublic } from "../../context/DataPublicContext";
import ListsProjetsPublic from "./ListsProjetsPublic";

const ProjetPublic = () => {
  const { listProjets } = DataPublic();
  return (
    <StyledProjetPublic>
      <span>🚀 {listProjets.length} Projets</span>
      <ListsProjetsPublic />
    </StyledProjetPublic>
  );
};

export default ProjetPublic;

const StyledProjetPublic = styled.div`
  width: 100%;
  /* padding: 10px; */
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  span {
    /* padding: 10px; */
    font-size: 1.3em;
    border-radius: 10px;
    color: white;
  }
  //responsive
  //884px = 768px
  @media screen and (max-width: 884px) {
    justify-content: flex-start;
  }
  @media screen and (max-width: 429px) {
    padding: 0px;
    overflow-x: scroll;
  }
`;
