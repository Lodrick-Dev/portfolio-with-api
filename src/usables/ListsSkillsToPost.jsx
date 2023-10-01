import React from "react";
import { styled } from "styled-components";
import { Dynamic } from "../context/ToDynamicContext";

const ListsSkillsToPost = () => {
  const { skillsSelect } = Dynamic();
  return (
    <StyledListsSkillsToPost>
      {skillsSelect &&
        skillsSelect.map((skill, index) => <span key={index}>{skill}</span>)}
    </StyledListsSkillsToPost>
  );
};

export default ListsSkillsToPost;

const StyledListsSkillsToPost = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  justify-items: center;
  span {
    text-align: center;
    background: yellow;
    margin: 10px;
    padding: 5px;
  }
`;
