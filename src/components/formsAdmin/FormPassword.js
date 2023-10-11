import React from "react";
import styled from "styled-components";
import Button from "../../usables/Button";

const FormPassword = () => {
  const handlePassword = (e) => {
    e.preventDefault();
    //déconnect -> Envoi page accueil
  };
  return (
    <StyledFormPassword onSubmit={(e) => handlePassword(e)}>
      <input type="password" placeholder="Ancien mot de passe" />
      <input type="password" placeholder="Nouveau mot de passe" />
      <input type="password" placeholder="Nouveau mot de passe" />
      <Button text={"Mise à jour"} />
    </StyledFormPassword>
  );
};

export default FormPassword;

const StyledFormPassword = styled.form`
  background: greenyellow;
  width: 50%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    width: 50%;
    font-size: 1.1em;
    padding: 5px;
    border: none;
    outline: none;
    margin-top: 15px;
    border-radius: 5px;
  }
  button {
    width: 45%;
  }
`;
