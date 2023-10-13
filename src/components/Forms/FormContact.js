import React, { useState } from "react";
import { styled } from "styled-components";
import TitleMedium from "../../usables/TitleMedium";
import Button from "../../usables/Button";
import { Dynamic } from "../../context/ToDynamicContext";
import axios from "axios";

const FormContact = () => {
  const { setSpin, setAlert } = Dynamic();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSub = async (e) => {
    e.preventDefault();
    setSpin(true);
    if (!name || !email || !message) {
      setSpin(false);
      setAlert("Erreur : Tous les champs sont obligatoires");
    }
    try {
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URI}contact/mail`,
        withCredentials: true,
        data: {
          emailCatch: email,
          text: message,
          name,
        },
      }).then((res) => {
        console.log(res);
        if (res.data.message && res.data.message.includes("Erreur")) {
          setSpin(false);

          return setAlert(res.data.message);
        }
        setAlert(res.data.message);
        setName("");
        setEmail("");
        setMessage("");
        setSpin(false);
      });
    } catch (error) {
      console.log(error);
      setSpin(false);
    }
  };
  return (
    <StyledFormContact>
      <div className="before-form">
        <TitleMedium text={"Contact 🤔"} />
        <hr />
        <p>
          Vous avez des questions, des idées de projets, ou simplement envie de
          discuter ? Je serais ravi d'entendre ce que vous avez à dire.
        </p>
        <p>
          {" "}
          N'hésitez pas à remplir le formulaire pour me contacter. Je vous
          répondrai dans les plus brefs délais.
        </p>
      </div>
      <form onSubmit={(e) => handleSub(e)}>
        <input
          type="text"
          placeholder="Nom*"
          value={name ? name : ""}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email*"
          value={email ? email : ""}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={message ? message : ""}
          placeholder="Votre message*"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <input type="hidden" />
        <Button text={"Envoyer"} />
      </form>
    </StyledFormContact>
  );
};

export default FormContact;

const StyledFormContact = styled.div`
  /* background: green; */
  background: rgba(115, 113, 113, 0.67);
  border-bottom: solid 10px #06ce8d;
  border-radius: 10px;
  padding: 24px;
  width: 70%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  align-items: center;
  height: 70vh;
  .before-form {
    width: 45%;
    height: 50%;
    display: flex;
    /* background: red; */
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .before-form > hr {
    width: 100%;
    border-radius: 10px;
    border: solid 2px #06ce8d;
  }
  .before-form > p {
    margin-top: 20px;
    font-size: 1.5em;
    color: #cacaca;
  }
  form {
    width: 50%;
    padding: 10px;
    /* border: solid 2px ; */
    /* background: red !important; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  form > input {
    width: 70%;
    padding: 3px;
    font-size: 1.2em;
    margin: 10px 0px;
    outline: none;
    border: none;
    border-bottom: solid 2px #212121;
    border-radius: 5px;
  }
  form > input:focus {
    background: #06ce8d;
    border-bottom: solid 3px yellow;
  }
  form > textarea {
    width: 70%;
    outline: none;
    border: none;
    border-bottom: solid 2px #212121;
    border-radius: 5px;
    padding: 3px;
    font-size: 1.2em;
    resize: none;
  }
  form > textarea:focus {
    background: #06ce8d;
    border-bottom: solid 3px yellow;
  }
`;
