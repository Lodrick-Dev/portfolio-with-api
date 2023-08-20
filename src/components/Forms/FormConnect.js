import React, { useState } from "react";
import { styled } from "styled-components";
import Button from "../../usables/Button";

const FormConnect = ({ mdpForget, setMdpForget }) => {
  const handleConnect = (e) => {
    e.preventDefault();
    if (mdpForget) {
      alert("init mdp");
    } else {
      alert("hello");
    }
  };
  return (
    <StyledFormConnect onSubmit={(e) => handleConnect(e)}>
      <input type="email" placeholder="Email*" />
      {!mdpForget && <input type="password" placeholder="Mot de passe*" />}
      <Button text={mdpForget ? "Initialisation" : "Connexion"} />
      {!mdpForget ? (
        <span onClick={() => setMdpForget("value")}>Mot de passe oublié</span>
      ) : undefined}
    </StyledFormConnect>
  );
};

export default FormConnect;

const StyledFormConnect = styled.form`
  width: 70%;
  background: grey;
  display: flex;
  padding: 5px;
  flex-direction: column;
  input {
    outline: none;
    border: none;
    border-radius: 3px;
    padding: 3px;
    font-size: 1.2em;
    margin-top: 15px;
  }
  input:focus {
    background: greenyellow;
  }
  span {
    cursor: pointer;
    color: pink;
  }
`;
