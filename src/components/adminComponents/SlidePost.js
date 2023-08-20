import React from "react";
import { styled } from "styled-components";
import ListsProjets from "../../usables/ListsProjets";
import PreviewPost from "./PreviewPost";
import { SlideInSection } from "../../context/SlideInSectionContext";

const SlidePost = ({ skillsSelect }) => {
  const { formPost } = SlideInSection();

  return (
    <StyledSlidePost>
      {formPost ? (
        <PreviewPost skillsSelect={skillsSelect} />
      ) : (
        <ListsProjets />
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
`;
