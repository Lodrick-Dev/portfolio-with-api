import React from "react";
import styled from "styled-components";
import { DataPublic } from "../../context/DataPublicContext";
import ListsProjetsPublic from "./ListsProjetsPublic";

const ProjetPublic = () => {
  const { listProjets } = DataPublic();
  return (
    <StyledProjetPublic>
      <span>
        Nombre de projet :{" "}
        <strong>{listProjets ? listProjets.length : 0}</strong>{" "}
      </span>
      <ListsProjetsPublic />
    </StyledProjetPublic>
  );
};

export default ProjetPublic;

const StyledProjetPublic = styled.div`
  /* background: pink; */
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  //responsive
  //884px = 768px
  @media screen and (max-width: 884px) {
    justify-content: flex-start;
  }
  @media screen and (max-width: 428px) {
    padding: 0px;
    overflow-x: scroll;
  }
`;
