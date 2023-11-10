import React from "react";
import { styled } from "styled-components";
import { Dynamic } from "../context/ToDynamicContext";

const ListsSkillsToPost = () => {
  const { skillsSelect } = Dynamic();
  return (
    <StyledListsSkillsToPost className="div-list-skills-to-post">
      {skillsSelect &&
        skillsSelect.map((skill, index) => <span key={index}>{skill}</span>)}
    </StyledListsSkillsToPost>
  );
};

export default ListsSkillsToPost;

const StyledListsSkillsToPost = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  /* background: pink; */
  justify-content: center;
  span {
    text-align: center;
    background: yellow;
    margin: 10px;
    padding: 5px;
  }
  //responsive
  //884px = 768px
  /* @media screen and (max-width: 884px) {
    .div-list-skills-to-post {
      width: 70%;
    }
  } */
  //428px iphone 13 pro max
  @media screen and (max-width: 428px) {
    width: 100%;
    overflow-y: scroll;
  }
`;
