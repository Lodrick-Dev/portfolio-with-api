import React from "react";
import { styled } from "styled-components";
const Button = ({ text, icon, actionClick }) => {
  return (
    <StyledButton
      onClick={actionClick}
      $csstext={text} // le $ sinon Styled component veut le renvoyé vers le dom
      type={text === "Annuler" ? "button" : undefined}
    >
      {text}
      {icon}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  padding: 5px;
  background: ${({ $csstext }) =>
    $csstext === "Annuler" ? "orange" : "yellow"};
  border: none;
  border-radius: 3px;
  margin: 10px 0px;
  cursor: pointer;
  /* width: 50% !important; */
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  /* .icon {
    margin-left: 10px;
  } */
  :last-child {
    margin-left: 10px;
    /* background: red; */
  }
`;
