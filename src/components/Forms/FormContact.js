import React, { useState } from "react";
import { styled } from "styled-components";
import TitleMedium from "../../usables/TitleMedium";
import Button from "../../usables/Button";
import { Dynamic } from "../../context/ToDynamicContext";
import axios from "axios";
import { COLORS } from "../../usables/COLORS";

const FormContact = () => {
  const { setSpin, setAlert } = Dynamic();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [inputNot, setInputNot] = useState("");
  const handleSub = async (e) => {
    e.preventDefault();
    setSpin(true);
    if (inputNot) {
      setSpin(false);
      return setAlert("Erreur : Lol robot 🤖");
    }
    if (!name || !email || !message) {
      setSpin(false);
      return setAlert("Erreur : Tous les champs sont obligatoires");
    }
    try {
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URI}contact/mail`,
        withCredentials: true,
        data: { hidden: inputNot, emailCatch: email, text: message, name },
      }).then((res) => {
        // console.log(res);
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
      return setAlert("Erreur : Une erreur inattendu est survenue");
    }
  };
  return (
    <StyledFormContact>
      <div className="before-form">
        <TitleMedium text={"Contact 📨"} />
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
        <input type="hidden" onChange={(e) => setInputNot(e.target.value)} />
        <Button text={"Envoyer"} />
      </form>
    </StyledFormContact>
  );
};

export default FormContact;

const StyledFormContact = styled.div`
  background: #2a2b31;
  border-radius: 20px;
  margin: 0px 15px;
  box-shadow: 8px 8px 20px #18191f, -8px -8px 20px #34353f;
  border: 1px solid rgba(255, 255, 255, 0.05);
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
    margin-top: 10px;
    width: 100%;
    border-radius: 10px;
    border: solid 2px ${COLORS.accent};
  }
  .before-form > p {
    margin-top: 20px;
    font-size: 1.5em;
    /* color: #cacaca; */
    color: ${COLORS.textPrimary};
    font-weight: 800;
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
    background: ${COLORS.background};
    border-bottom: solid 2px ${COLORS.accent};
    color: ${COLORS.accent};
    border-radius: 5px;
  }
  form > textarea {
    width: 70%;
    outline: none;
    border: none;
    background: ${COLORS.background};
    border-bottom: solid 2px ${COLORS.accent};
    color: ${COLORS.accent};
    border-radius: 5px;
    padding: 3px;
    font-size: 1.2em;
    resize: none;
  }

  //responsive
  //884px = 768px
  @media screen and (max-width: 884px) {
    width: 85%;
    form {
      width: 70%;
    }
  }
  //428px iphone 13 pro max
  @media screen and (max-width: 428px) {
    /* background: red; */
    backdrop-filter: blur(3px);
    height: 80vh;
    width: 100%;
    padding: 5px;
    flex-direction: column;
    .before-form {
      /* background: blue; */
      width: 100%;
    }
    .before-form > p {
      font-size: 1em;
    }
    form {
      width: 100%;
      /* background: red; */
    }
    form > textarea {
      height: 10vh;
      width: 85%;
      font-size: 1em;
    }
    form > input {
      width: 85%;
      font-size: 1em;
    }
  }
`;
