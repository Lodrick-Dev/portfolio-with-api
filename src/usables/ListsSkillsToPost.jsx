import React from "react";
import { styled } from "styled-components";

const ListsSkillsToPost = ({ skillsSelect }) => {
  return (
    <StyledListsSkillsToPost>
      {skillsSelect.map((skill, index) => (
        <span key={index}>{skill}</span>
      ))}
    </StyledListsSkillsToPost>
  );
};

export default ListsSkillsToPost;

const StyledListsSkillsToPost = styled.div`
  width: 50%;
  display: flex;
  background: yellow;
`;
