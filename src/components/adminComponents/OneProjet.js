import React from "react";
import styled from "styled-components";
import TitleMedium from "../../usables/TitleMedium";
import ListsSkillsToPost from "../../usables/ListsSkillsToPost";
import { Dynamic } from "../../context/ToDynamicContext";

const OneProjet = ({ projetSelected, setProjetSelected }) => {
  const { setSkillsSelect } = Dynamic();
  const initialiseToClosePop = () => {
    setProjetSelected(null);
    setSkillsSelect(null);
  };
  return (
    <StyledOneProjet onClick={() => initialiseToClosePop()}>
      <div onClick={(e) => e.stopPropagation()}>
        <TitleMedium text={projetSelected.projet} />
        <p>{projetSelected.content}</p>
        <a href={projetSelected.lien}>Le lien : {projetSelected.lien}</a>
        <ListsSkillsToPost />
      </div>
    </StyledOneProjet>
  );
};

export default OneProjet;

const StyledOneProjet = styled.div`
  position: fixed;
  z-index: 10;
  height: 100vh;
  width: 100%;
  top: 50%;
  right: 50%;
  background: #5e5e5d46;
  /* opacity: 0.5; */
  backdrop-filter: blur(5px);
  transform: translate(50%, -50%);
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    background: blueviolet;
    padding: 10px;
  }
`;
