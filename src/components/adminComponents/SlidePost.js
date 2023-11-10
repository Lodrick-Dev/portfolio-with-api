import React from "react";
import { styled } from "styled-components";
import ListsProjets from "../../usables/ListsProjets";
import PreviewPost from "./PreviewPost";
import { SlideInSection } from "../../context/SlideInSectionContext";
import { Dynamic } from "../../context/ToDynamicContext";

const SlidePost = ({ setSkillsSelect }) => {
  const { formPost } = SlideInSection();
  const { skillsSelect } = Dynamic();

  return (
    <StyledSlidePost>
      {formPost ? (
        <PreviewPost skillsSelect={skillsSelect} />
      ) : (
        <ListsProjets
          // skillsSelect={skillsSelect}
          setSkillsSelect={setSkillsSelect}
        />
      )}
    </StyledSlidePost>
  );
};

export default SlidePost;

const StyledSlidePost = styled.div`
  background: grey;
  display: flex;
  width: 50%;
  height: 90%;
  //responsive
  //884px = 768px
  @media screen and (max-width: 884px) {
    height: 50%;
    overflow-x: scroll;
  }
  @media screen and (max-width: 428px) {
    width: 90%;
    height: 50vh;
    flex-wrap: wrap;
  }
`;
