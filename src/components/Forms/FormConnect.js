import React, { useState } from "react";
import { styled } from "styled-components";
import Button from "../../usables/Button";
import axios from "axios";
import { Dynamic } from "../../context/ToDynamicContext";

const FormConnect = ({ mdpForget, setMdpForget }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [redirection, setRedirection] = useState(null);
  const { setAlert } = Dynamic();
  let compt = 5;
  const handleConnect = (e) => {
    e.preventDefault();
    if (mdpForget) {
      alert("init mdp");
    } else {
      connexionUser(email, password);
    }
  };
  const connexionUser = async (email, password) => {
    // if (!email || !password)
    //   return setAlert("Erreur :  Tous les champs sont nécessaires 😥");
    try {
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URI}user/login`,
        withCredentials: true,
        data: {
          email,
          password,
        },
      }).then((res) => {
        console.log(res);
        return; //
        if (res.data.error) return setAlert(`Erreur : ${res.data.error}`);
        if (res.data.errors)
          return setAlert(`Erreur : ${res.data.errors.fatal}`);
        if (res.data.redirection) {
          console.log(res.data.redirection);
          setRedirection(res.data.redirection);
          console.log(redirection);
          const intervallCompteur = setInterval(() => {
            console.log("je suis dans l'interval");
            compt--;
            setAlert("Erreur : Bloqué ! Vous êtes rediriger dans " + compt);
            if (compt < 0) {
              clearInterval(intervallCompteur);
              console.log("compteur < à 0");
              compt = 5;
              setRedirection(null);
              window.location.href = "https://www.google.com";
            }
          }, 1000);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledFormConnect onSubmit={(e) => handleConnect(e)}>
      <input
        type="email"
        placeholder="Email*"
        onChange={(e) => setEmail(e.target.value)}
      />
      {!mdpForget && (
        <input
          type="password"
          placeholder="Mot de passe*"
          onChange={(e) => setPassword(e.target.value)}
        />
      )}
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
