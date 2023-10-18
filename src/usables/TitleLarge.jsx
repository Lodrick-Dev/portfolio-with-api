import React from "react";
import { styled } from "styled-components";
import { Dynamic } from "../context/ToDynamicContext";

const TitleLarge = ({ text }) => {
  const { setPopChange, location } = Dynamic();
  const admin = () => {
    // console.log(location);
    if (location.pathname === "/") setPopChange(true);
  };
  return (
    //le $ devant location car StyledComponent veut le renvoye au dom
    <StyledTitle onDoubleClick={() => admin()} $location={location.pathname}>
      {text ? text : "Aucun titre"}
    </StyledTitle>
  );
};

export default TitleLarge;
const StyledTitle = styled.h1`
  font-size: ${({ $location }) => ($location === "/admin" ? "1.5em" : "3em")};
  color: #06ce8d;
  user-select: none;
  text-align: center;

  @media screen and (max-width: 884px) {
    font-size: 2.5em;
  }
`;
