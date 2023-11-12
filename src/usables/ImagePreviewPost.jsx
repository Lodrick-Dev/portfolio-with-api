import React from "react";
import { styled } from "styled-components";
import { SlideInSection } from "../context/SlideInSectionContext";

const ImagePreviewPost = () => {
  const imgDefault = "./other/posts/defaultprofil.png";
  const { imgPostPreview } = SlideInSection();
  return (
    <StyledImagePreview
      src={imgPostPreview ? imgPostPreview : imgDefault}
      alt="preview projet"
    />
  );
};

export default ImagePreviewPost;

const StyledImagePreview = styled.img`
  width: 50%;
  border-radius: 5px;
`;
