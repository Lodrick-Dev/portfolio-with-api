import React from "react";
import { styled } from "styled-components";
import ImagePreviewProfil from "../../usables/ImagePreviewProfil";
import Description from "../../usables/Description";
const PreviewProfil = ({ dataProfil, catchImage }) => {
  return (
    <StyledPreviewProfil>
      <ImagePreviewProfil catchImage={catchImage} />
      <Description dataProfil={dataProfil} />
    </StyledPreviewProfil>
  );
};

export default PreviewProfil;

const StyledPreviewProfil = styled.div`
  background: blueviolet;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
