import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { SlideInSection } from "../../context/SlideInSectionContext";
import Resizer from "react-image-file-resizer";
import ImagePreviewPost from "../../usables/ImagePreviewPost";
import ListsSkillsToPost from "../../usables/ListsSkillsToPost";

const PreviewPost = ({ skillsSelect }) => {
  const { postPreview } = SlideInSection();
  const [previewImg, setPreviewImg] = useState("");
  const { imgPostPreview } = SlideInSection();
  // const imgDefault = "./upload/post/defaultProfil.png";
  // console.log(imgPostPreview);
  useEffect(() => {
    console.log(skillsSelect);
    //resize l'image, 100 c'est la meilleire qualité, 0 pour la rotation
    if (imgPostPreview) {
      Resizer.imageFileResizer(
        imgPostPreview,
        1080,
        1080,
        "PNG",
        100,
        0,
        (uri) => {
          setPreviewImg(uri);
        },
        "base64"
      );
    }
  }, [imgPostPreview]);

  return (
    <StyledPreviewPost>
      <strong>Prévisualisation</strong>
      <ImagePreviewPost previewImg={previewImg} />
      <h1>{postPreview[0]}</h1>
      <span>{postPreview[1]}</span>
      <p>{postPreview[2]}</p>
      {skillsSelect && <ListsSkillsToPost skillsSelect={skillsSelect} />}
    </StyledPreviewPost>
  );
};

export default PreviewPost;
const StyledPreviewPost = styled.div`
  position: relative;
  background: pink;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  overflow-y: scroll;
  background: red;
  &::-webkit-scrollbar {
    display: none;
  }
  strong {
    position: absolute;
    top: 5px;
    right: 5px;
    text-decoration: underline;
  }
  .prev-skills {
    width: 50%;
    display: flex;
    background: yellow;
  }
`;
