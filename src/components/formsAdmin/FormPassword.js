import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../usables/Button";
import { MdRemoveRedEye } from "react-icons/md";
import { Dynamic } from "../../context/ToDynamicContext";
import axios from "axios";

const FormPassword = () => {
  const { setAlert, setSpin, navigue, idUser, user, setIdUser, setUser } =
    Dynamic();
  const [firstEye, setFirstEye] = useState(false);
  const [secondEye, setSecondEye] = useState(false);
  const [thirdEye, setThirdEye] = useState(false);
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confNewPass, setConfNewPass] = useState("");
  const handlePassword = async (e) => {
    e.preventDefault();
    setSpin(true);
    //déconnect -> Envoi page accueil
    if (!oldPass || !newPass || !confNewPass) {
      setSpin(false);
      return setAlert("Erreur : Tous les champs sont nécessaires bro");
    }
    if (newPass !== confNewPass) {
      setSpin(false);
      return setAlert("Erreur : Nouveau mot de passe ne correspondent pas");
    }
    // return;
    try {
      await axios({
        method: "put",
        url: `${process.env.REACT_APP_API_URI}user/${idUser}/password`,
        withCredentials: true,
        data: {
          email: user.email,
          oldpass: oldPass,
          password: newPass,
        },
      }).then((res) => {
        console.log(res);
        if (res.data.message && res.data.message.includes("Erreur")) {
          setSpin(false);
          return setAlert(res.data.message);
        }
        console.log("je suis ici Lod");
        setAlert(res.data.message + " Connectez-vous à nouveau");
        setTimeout(() => {
          setSpin(false);
          changeMdpDeconnect();
          navigue("/");
        }, 3000);
        return;
      });
    } catch (error) {
      setSpin(false);
      console.log(error);
    }
  };

  const changeMdpDeconnect = async () => {
    try {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URI}user/logout`,
        withCredentials: true,
      }).then(() => {
        setIdUser(null);
        setUser(null);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledFormPassword onSubmit={(e) => handlePassword(e)}>
      <div>
        <input
          type={firstEye ? "text" : "password"}
          placeholder="Ancien mot de passe"
          onChange={(e) => setOldPass(e.target.value)}
        />
        <MdRemoveRedEye
          className="eye"
          onClick={() => setFirstEye(!firstEye)}
        />
      </div>
      <div>
        <input
          type={secondEye ? "text" : "password"}
          placeholder="Nouveau mot de passe"
          onChange={(e) => setNewPass(e.target.value)}
        />
        <MdRemoveRedEye
          className="eye"
          onClick={() => setSecondEye(!secondEye)}
        />
      </div>
      <div>
        <input
          type={thirdEye ? "text" : "password"}
          placeholder="Nouveau mot de passe"
          onChange={(e) => setConfNewPass(e.target.value)}
        />
        <MdRemoveRedEye
          className="eye"
          onClick={() => setThirdEye(!thirdEye)}
        />
      </div>
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
  div {
    position: relative;
    width: 50%;
    display: flex;
    align-items: center;
    margin-top: 15px;
  }
  div > .eye {
    position: absolute;
    z-index: 10;
    right: 5px;
    font-size: 1.3em;
    cursor: pointer;
  }
  div > input {
    width: 100%;
    font-size: 1.1em;
    padding: 5px;
    border: none;
    outline: none;
    border-radius: 5px;
  }

  button {
    width: 45%;
  }
  //428px iphone 13 pro max
  @media screen and (max-width: 428px) {
    width: 90%;
    div {
      width: 80%;
    }
  }
`;
