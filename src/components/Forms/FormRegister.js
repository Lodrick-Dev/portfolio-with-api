import React, { useRef, useState } from "react";
import { styled } from "styled-components";
import Button from "../../usables/Button";
import axios from "axios";
import { Dynamic } from "../../context/ToDynamicContext";

const FormRegister = ({ setConnect }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmePassword, setConfirmePassword] = useState("");
  const [codeSecret, setCodesecret] = useState("");
  // const email = useRef();
  // const password = useRef();
  // const confirmePassword = useRef();
  // const codeSecret = useRef();
  const { setAlert } = Dynamic();
  const { alert } = Dynamic();
  const handleRegister = async (e) => {
    e.preventDefault();
    // setAlert("Inscription réussi ! Connectez-vous 😁");
    // setAlert("Erreur lors de l'inscription 😥");
    // if (
    //   email.current.value &&
    //   password.current.value &&
    //   confirmePassword.current.value &&
    //   codeSecret.current.value
    // ) {
    if (email && password && confirmePassword && codeSecret) {
      if (password === confirmePassword) {
        try {
          await axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URI}user/register`,
            withCredentials: true,
            data: {
              email: email,
              password: password,
              code: codeSecret,
            },
          }).then((res) => {
            console.log(res);
            if (res.data.error)
              return setAlert("Erreur : " + res.data.error + " 🤔");
            if (res.data.message) {
              setEmail("");
              setPassword("");
              setConfirmePassword("");
              setCodesecret("");
              setConnect(true);
              return setAlert(res.data.message + " Connectez-vous 😁");
            }
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
      <input
        type="email"
        placeholder="Email"
        value={email}
        // ref={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        // ref={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirmation mot de passe"
        value={confirmePassword}
        // ref={confirmePassword}
        onChange={(e) => setConfirmePassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Code attendu"
        value={codeSecret}
        // ref={codeSecret}
        onChange={(e) => setCodesecret(e.target.value)}
      />
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
