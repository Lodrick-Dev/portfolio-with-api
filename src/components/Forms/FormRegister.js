import React from "react";
import { styled } from "styled-components";
import Button from "../../usables/Button";

const FormRegister = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    alert("touche register");
  };
  return (
    <StyledFormRegister onSubmit={(e) => handleRegister(e)}>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Mot de passe" />
      <input type="password" placeholder="Confirmation mot de passe" />
      <input type="text" placeholder="Code attendu" />
      <Button text={"Inscription"} />
    </StyledFormRegister>
  );
};

export default FormRegister;
const StyledFormRegister = styled.form`
  background: pink;
  width: 70%;
  display: flex;
  flex-direction: column;
  padding: 5px;
  input {
    margin-top: 10px;
    padding: 3px;
    font-size: 1.2em;
    outline: none;
    border: none;
    border-radius: 3px;
  }
`;
