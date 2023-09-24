import React from "react";
import { Dynamic } from "../context/ToDynamicContext";
import styled from "styled-components";

const TitleLittle = ({ text, actionClick }) => {
  const { idUser } = Dynamic();
  return (
    <StyledTitleLittle $ccsText={idUser} onClick={actionClick}>
      {text ? text : "Petit titre"}
    </StyledTitleLittle>
  );
};

export default TitleLittle;

const StyledTitleLittle = styled.h3`
  cursor: ${({ $ccsText }) => ($ccsText ? "pointer" : "alias")};
`;
