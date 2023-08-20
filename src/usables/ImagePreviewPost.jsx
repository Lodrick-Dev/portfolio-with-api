import React from "react";
import { styled } from "styled-components";

const ImagePreviewPost = ({ previewImg }) => {
  const imgDefault = "./upload/post/defaultProfil.png";
  return (
    <StyledImagePreview
      src={previewImg ? previewImg : imgDefault}
      alt="preview projet"
    />
  );
};

export default ImagePreviewPost;

const StyledImagePreview = styled.img`
  width: 50%;
`;
