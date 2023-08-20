import React, { useEffect, useState } from "react";
import Resizer from "react-image-file-resizer";
import { styled } from "styled-components";
const ImagePreviewProfil = ({ catchImage }) => {
  const [imgFinaleToPreview, setImgFinaleToPreview] = useState("");
  const imgDefault = "./upload/profil/profil.png";
  useEffect(() => {
    if (catchImage) {
      Resizer.imageFileResizer(
        catchImage,
        1080,
        1080,
        "PNG",
        100,
        0,
        (url) => {
          setImgFinaleToPreview(url);
        },
        "base64"
      );
    }
  }, [catchImage]);

  return (
    <StyledImagePreviewProfil
      src={imgFinaleToPreview ? imgFinaleToPreview : imgDefault}
      alt="preview public"
    />
  );
};

export default ImagePreviewProfil;
const StyledImagePreviewProfil = styled.img`
  width: 30%;
`;
