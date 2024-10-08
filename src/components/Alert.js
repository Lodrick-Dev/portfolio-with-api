import React, { useEffect } from "react";
import styled from "styled-components";
import { Dynamic } from "../context/ToDynamicContext";

const Alert = () => {
  const { alert } = Dynamic();
  const { setAlert } = Dynamic();
  // $tocss : pour condition dans en css
  useEffect(() => {
    const timeMort = () => {
      setTimeout(() => {
        setAlert("");
      }, 5000);
    };
    if (alert) {
      timeMort();
    } else {
      clearTimeout(timeMort);
    }
  }, [alert]);

  return <StyledAlert $tocss={alert}>{alert}</StyledAlert>;
};

export default Alert;
const StyledAlert = styled.div`
  position: fixed;
  /* width: 10%; */
  height: 8vh;
  background: ${({ $tocss }) =>
    $tocss.includes("Erreur") || $tocss.includes("Error")
      ? "#ffe6e6"
      : "#e6ffe6"};
  color: ${({ $tocss }) =>
    $tocss.includes("Erreur") || $tocss.includes("Error") ? "red" : "#4CAF50"};
  border-bottom: solid 3px
    ${({ $tocss }) =>
      $tocss.includes("Erreur") || $tocss.includes("Error")
        ? "red"
        : "#4CAF50"};
  top: 5px;
  right: 5px;
  z-index: 30;
  border-radius: 5px;
  box-shadow: 1px 4px 8px #3f3f3f8c;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  animation: showMe 5s ease-in-out;
  opacity: 0;
  transition: opacity 0.1s;
  visibility: hidden;
  @keyframes showMe {
    0% {
      opacity: 0;
      /* display: block; */
      visibility: hidden;
      /* transition: 1s; */
    }
    10% {
      opacity: 1;
      /* display: block; */
      visibility: visible;
    }
    90% {
      opacity: 1;
      visibility: visible;
    }
    100% {
      opacity: 0;
      visibility: hidden;
      /* display: none; */
      /* transition: 1s; */
    }
  }
  //responsive
  //884px = 768px
  @media screen and (max-width: 884px) {
    height: 5vh;
    font-size: 1em;
  }
`;
