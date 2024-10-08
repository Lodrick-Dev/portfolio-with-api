import React, { useState } from "react";
import { styled } from "styled-components";
import FormPost from "../formsAdmin/FormPost";
import SlidePost from "./SlidePost";
import { Dynamic } from "../../context/ToDynamicContext";
const SectionPost = () => {
  // const [skillsSelect, setSkillsSelect] = useState([]);
  const { skillsSelect, setSkillsSelect } = Dynamic();
  return (
    <StyledSectionPost>
      <FormPost setSkillsSelect={setSkillsSelect} skillsSelect={skillsSelect} />
      <SlidePost
        skillsSelect={skillsSelect}
        setSkillsSelect={setSkillsSelect}
      />
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
  //responsive
  //884px = 768px
  @media screen and (max-width: 884px) {
    width: 95%;
    margin: 10px auto;
  }
  //428px iphone 13 pro max
  @media screen and (max-width: 428px) {
    flex-direction: column;
    height: 100vh;
  }
  //360 Iphone 12 mini
  @media screen and (max-width: 360px) {
    /* height: 90vh; */
  }
`;
