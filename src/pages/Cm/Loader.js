import React from "react";
import styled from "styled-components";

export const Loader = () => {
  return (
    <StyledLoade>
      <span>Inscription en cours...</span>
      <span className="loader"></span>
    </StyledLoade>
  );
};

const StyledLoade = styled.div`
  /* background: blue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20vh;
  width: 100%;
  padding: 5px;
  .loader {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    border: 10px solid;
    border-color: rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25)
      rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.5);
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
