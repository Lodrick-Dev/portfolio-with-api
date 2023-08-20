import React, { useState } from "react";
import { styled } from "styled-components";
import FormPost from "../formsAdmin/FormPost";
import SlidePost from "./SlidePost";
const SectionPost = () => {
  const [skillsSelect, setSkillsSelect] = useState([]);
  return (
    <StyledSectionPost>
      <FormPost setSkillsSelect={setSkillsSelect} skillsSelect={skillsSelect} />
      <SlidePost skillsSelect={skillsSelect} />
    </StyledSectionPost>
  );
};

export default SectionPost;

const StyledSectionPost = styled.section`
  background: yellow;
  height: 80vh;
  margin: 20px auto;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
