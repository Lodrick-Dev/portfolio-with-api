import React from "react";
import styled from "styled-components";
import { Dynamic } from "../context/ToDynamicContext";

const TitleMedium = ({ text, actionClick }) => {
  const { idUser } = Dynamic();
  return (
    <StyledTitleMedium onClick={actionClick} $csstxt={idUser}>
      {text ? text : " Aucun medium titre"}
    </StyledTitleMedium>
  );
};

export default TitleMedium;
const StyledTitleMedium = styled.h2`
  cursor: ${({ $csstxt }) => ($csstxt ? "pointer" : "default")};
  color: #cacaca;
  font-size: 2.5em;
  //428px iphone 13 pro max
  @media screen and (max-width: 428px) {
    font-size: 1.7em;
  }
`;
