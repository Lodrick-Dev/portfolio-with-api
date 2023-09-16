import React, { useRef } from "react";
import { styled } from "styled-components";
import Button from "../../usables/Button";
import axios from "axios";
import { Dynamic } from "../../context/ToDynamicContext";

const FormRegister = () => {
  const email = useRef();
  const password = useRef();
  const confirmePassword = useRef();
  const codeSecret = useRef();
  const { setIdUser } = Dynamic();
  const { setUser } = Dynamic();
  const { setAlert } = Dynamic();
  const { alert } = Dynamic();
  const handleRegister = async (e) => {
    e.preventDefault();
    // setAlert("Inscription réussi ! Connectez-vous 😁");
    // setAlert("Erreur lors de l'inscription 😥");
    if (
      email.current.value &&
      password.current.value &&
      confirmePassword.current.value &&
      codeSecret.current.value
    ) {
      if (password.current.value === confirmePassword.current.value) {
        try {
          await axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URI}user/register`,
            withCredentials: true,
            data: {
              email: email.current.value,
              password: password.current.value,
              code: codeSecret.current.value,
            },
          }).then((res) => {
            console.log(res);
            if (res.data.error)
              return setAlert("Erreur : " + res.data.error + " 🤔");
            if (res.data.message)
              return setAlert(res.data.message + " Connectez-vous 😁");
            if (res.data.errors.message)
              return setAlert("Erreur : " + res.data.errors.message + " 🤔");
            console.log(res);
            console.log("log moi");
          });
        } catch (error) {
          console.log(error);
          if (error.message.includes("Network Error"))
            return setAlert("Erreur: Serveur injoinable 😨");
        }
      } else {
        return setAlert("Erreur : Mot de passes correspondent pas 😥");
      }
    } else {
      return setAlert("Erreur : Tous les champs sont nécessaires");
    }
  };
  return (
    <StyledFormRegister onSubmit={(e) => handleRegister(e)}>
      <input type="email" placeholder="Email" ref={email} />
      <input type="password" placeholder="Mot de passe" ref={password} />
      <input
        type="password"
        placeholder="Confirmation mot de passe"
        ref={confirmePassword}
      />
      <input type="text" placeholder="Code attendu" ref={codeSecret} />
      {!alert && <Button text={"Inscription"} />}
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
