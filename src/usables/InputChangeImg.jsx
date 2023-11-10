import React from "react";
import { MdFlipCameraIos } from "react-icons/md";
import { styled } from "styled-components";

const InputChangeImg = ({ actionClick, imgSelectedCurrent, actionChange }) => {
  return (
    <StyledInputChangeImg onClick={actionClick}>
      <MdFlipCameraIos className="cam" />
      <input type="file" ref={imgSelectedCurrent} onChange={actionChange} />
      <span>Changer l'image</span>
    </StyledInputChangeImg>
  );
};

export default InputChangeImg;

const StyledInputChangeImg = styled.div`
  border: 2px dashed pink;
  margin: 20px auto;
  position: relative;
  width: 10%;
  padding: 3px;
  border-radius: 3px;
  display: flex;
  justify-content: center;

  span {
    position: absolute;
    background: pink;
    width: 120px;
    border-radius: 2px;
    text-align: center;
    bottom: -15px;
    font-size: 0.7em;
    z-index: 3;
    pointer-events: none;
  }
  .cam {
    font-size: 2.5em;
    /* pointer-events: none; */
    cursor: pointer;
  }
  input {
    display: none;
  }
  //responsive
  //884px = 768px
  @media screen and (max-width: 884px) {
    width: 20%;
  }
`;
