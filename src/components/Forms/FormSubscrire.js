import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { Loader } from "../../pages/Cm/Loader";
import axios from "axios";

const FormSubscrire = () => {
  const [email, setEmail] = useState("");
  const [hidden, setHidden] = useState("");
  const [sending, setSending] = useState(false);
  const nav = useNavigate();

  const handleSub = async () => {
    if (!email) {
      return toast.error("L'email est obligatoire");
    }
    setSending(true);
    try {
      const res = await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URI}contact/subscribe`,
        withCredentials: true,
        data: { hidden, email },
      });
      if (res.data.message) {
        setSending(false);
        return toast.success(res.data.message);
      }
      if (res.data.error) {
        setSending(false);
        return toast.error(res.data.error);
      }
    } catch (error) {
      setSending(false);
      console.log("Erreur");
      console.log(error);
      return toast.error("Une erreur est survenue");
    }
  };
  return (
    <StyledFormSubscrire onClick={(e) => e.stopPropagation()}>
      {sending ? (
        <Loader />
      ) : (
        <>
          <strong>Rejoignez notre liste d'attente</strong>
          <p>
            Restez informé des dernières nouveautés et ne manquez pas
            l'opportunité de propulser votre stratégie de contenu grâce à
            l'intelligence artificielle.
          </p>
          <input
            type="email"
            placeholder="Email*"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input type="hidden" onChange={(e) => setHidden(e.target.value)} />
          <button onClick={handleSub}>Je m'inscris *</button>
          <span className="info-i">
            *Votre adresse e-mail sera uniquement utilisée pour vous tenir
            informé des actualités et du lancement de notre application.{" "}
            <strong onClick={() => nav("/")}>
              Vous pouvez vous désinscrire à tout moment.
            </strong>
          </span>
        </>
      )}
    </StyledFormSubscrire>
  );
};

export default FormSubscrire;

const StyledFormSubscrire = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  background: #263238;
  padding: 20px;
  border-radius: 5px;
  margin: 30px 0px;
  strong {
    text-align: center;
    font-size: 2em;
    color: #0ad1c8;
  }
  p,
  span {
    color: white;
    margin: 15px 0px;
    strong {
      font-size: 0.8em;
      color: #80ed99;
      cursor: pointer;
    }
  }
  .info-i {
    font-size: 0.8em;
  }
  input {
    width: 50%;
    outline: none;
    padding: 5px;
    border: none;
    border-radius: 5px;
    font-size: 1.4em;
    margin: 10px 0px;
  }
  button {
    cursor: pointer;
    width: 30%;
    background: #80ed99;
    padding: 5px;
    border: none;
    border-radius: 5px;
    outline: none;
    font-size: 1.3em;
    font-weight: 700;
  }
  button:hover,
  button:active {
    background: #0ad1c8;
  }

  //428px iphone 13 pro max
  @media screen and (max-width: 429px) {
    width: 95%;
    input {
      width: 90%;
    }
    button {
      width: 50%;
    }
  }
`;
