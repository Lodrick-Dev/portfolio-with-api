import React from "react";
import { styled } from "styled-components";
import { DataPublic } from "../context/DataPublicContext";
import TitleMedium from "./TitleMedium";

const Skills = () => {
  const { skillsPublic } = DataPublic();
  return (
    <StyledSkills>
      <TitleMedium text={"Bon savoir"} />
      {skillsPublic &&
        skillsPublic.map((skill) => <li key={skill._id}>{skill.name}</li>)}
    </StyledSkills>
  );
};

export default Skills;

const StyledSkills = styled.ul`
  /* border: dashed 5px pink; */
  width: 80%;
  margin: 25px auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: yellow;
  h2 {
    width: 100%;
    background: blueviolet;
    text-align: center;
  }
  li {
    padding: 10px;
    font-size: 1.2em;
    margin: 10px;
    border-radius: 5px;
    background: greenyellow;
  }
`;
