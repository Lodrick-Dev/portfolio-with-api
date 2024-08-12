import React, { useState } from "react";
import styled from "styled-components";
import FormSubscrire from "../../components/Forms/FormSubscrire";

const CommunityManager = () => {
  const [show, setShow] = useState(false);
  return (
    <StyledCommunityManager>
      <h1>Boostez votre stratégie de contenu avec notre outil IA</h1>
      <h2>
        Découvrez comment notre application révolutionne la gestion de contenu
        pour les Community Managers.
      </h2>

      <div className="intro">
        <p>Vous êtes Community Manager, Social Media Manager.</p>
        <p>
          {" "}
          Notre future application web est conçue pour transformer votre manière
          de gérer et créer du contenu.{" "}
          <span onClick={() => setShow(true)}>
            Inscrivez-vous dès maintenant pour être parmi les premiers à
            découvrir et tester ces fonctionnalités innovantes !
          </span>
        </p>
        <span className="loader"></span>
      </div>
      <div className="features">
        <div className="commu">
          <div className="box-title-feature">
            <h3 className="feature-h">Fonctionnalité*</h3>
            <span class="loader"></span>
          </div>
          <p>
            <span>Génération d'Idées de Publications :</span> Proposition
            d'idées de contenu pertinentes et engageantes.
          </p>
          <p>
            <span>Postes Interactifs Automatisés :</span> Créez des sondages,
            des questions-réponses et d'autres types de contenu interactif pour
            maximiser l'engagement de votre audience.
          </p>
          <p>
            <span>Création d'Images :</span> Créez des images en relation avec
            vos publications/public visé.
          </p>
          <p>
            <span>Génération de Hashtags :</span> Obtenez une sélection de
            hashtags optimisés pour maximiser la portée de vos posts.
          </p>
          <p>
            <span>Descriptions de Posts Personnalisées :</span> En fonction de
            votre objectif, obtenez des descriptions percutantes qui captivent
            votre audience.
          </p>
          {/* <p>
            <span>Création d'Infographies Dynamiques :</span> Transformez vos
            données en infographies visuellement attrayantes et faciles à
            partager.
          </p> */}
          <p>
            <span>Rédaction Automatisée des Fonctionnalités :</span> Présentez
            vos fonctionnalités innovantes de manière claire et convaincante.
          </p>
          <p>
            <span>Texte de Présentation de Solution :</span> Génère un texte
            convaincant expliquant pourquoi votre solution est indispensable.
          </p>
        </div>
        <span className="i-feature-plus">
          *d'autres fonctionnalités sont à l'étude
        </span>
      </div>
      <FormSubscrire />
      <div className="info-before-subscribe">
        <h3>Pourquoi s'inscrire ?</h3>
        <p>
          <strong>Soyez les premiers : </strong>Recevez une notification
          exclusive dès le lancement de notre outil.
        </p>
        <p>
          <strong>Accès anticipé : </strong>Bénéficiez d'un accès anticipé pour
          tester l'application et donner votre avis.
        </p>
        <p>
          <strong>Offre spéciale : </strong> Inscrivez-vous maintenant et
          recevez des avantages exclusifs lors du lancement officiel.
        </p>
        <h3 className="h-fin">Adoptez l'IA dans votre activité</h3>
      </div>
      <FormSubscrire />
      {show && (
        <div className="big-window" onClick={() => setShow(false)}>
          <FormSubscrire />
        </div>
      )}
    </StyledCommunityManager>
  );
};

export default CommunityManager;

const StyledCommunityManager = styled.div`
  background: #213a57;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  h1 {
    margin: 20px 0px;
    font-size: 3.5em;
  }
  h2,
  h3 {
    margin: 10px 0px;
    font-size: 1.7em;
    color: white !important;
  }
  h1,
  h2,
  h3 {
    color: #0ad1c8;
  }
  .intro {
    /* background: pink; */
    width: 60%;
    margin: 30px 0px;
    border-top: solid 2px #0ad1c8;
    border-bottom: solid 2px #0ad1c8;
    padding: 50px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    p {
      padding: 10px;
      text-align: center;
      font-size: 1.5em;
      color: white;
      span {
        color: #80ed99;
        cursor: pointer;
      }
      span:hover {
        color: #0ad1c8;
      }
    }
    .loader {
      margin-top: 50px;
      width: 64px;
      height: 44px;
      position: relative;
      border: 5px solid #fff;
      border-radius: 8px;
    }
    .loader::before {
      content: "";
      position: absolute;
      border: 5px solid #fff;
      width: 32px;
      height: 28px;
      border-radius: 50% 50% 0 0;
      left: 50%;
      top: 0;
      transform: translate(-50%, -100%);
    }
    .loader::after {
      content: "";
      position: absolute;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 50%;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #fff;
      box-shadow: 16px 0 #fff, -16px 0 #fff;
      animation: flash 0.5s ease-out infinite alternate;
    }

    @keyframes flash {
      0% {
        background-color: rgba(255, 255, 255, 0.25);
        box-shadow: 16px 0 rgba(255, 255, 255, 0.25),
          -16px 0 rgba(255, 255, 255, 1);
      }
      50% {
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 16px 0 rgba(255, 255, 255, 0.25),
          -16px 0 rgba(255, 255, 255, 0.25);
      }
      100% {
        background-color: rgba(255, 255, 255, 0.25);
        box-shadow: 16px 0 rgba(255, 255, 255, 1),
          -16px 0 rgba(255, 255, 255, 0.25);
      }
    }
  }

  .feature-h {
    font-size: 2.1em;
  }

  .features {
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 10px 0px 20px 0px;
    border-bottom: solid 2px #0ad1c8;
    width: 60%;
    .i-feature-plus {
      font-size: 0.8em;
      color: #0ad1c8;
    }
    .box-title-feature {
      .loader {
        width: 60px;
        height: 40px;
        position: relative;
        display: inline-block;
        --base-color: #263238; /*use your base color*/
      }
      .loader::before {
        content: "";
        left: 0;
        top: 0;
        position: absolute;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background-color: #fff;
        background-image: radial-gradient(
            circle 8px at 18px 18px,
            var(--base-color) 100%,
            transparent 0
          ),
          radial-gradient(
            circle 4px at 18px 0px,
            var(--base-color) 100%,
            transparent 0
          ),
          radial-gradient(
            circle 4px at 0px 18px,
            var(--base-color) 100%,
            transparent 0
          ),
          radial-gradient(
            circle 4px at 36px 18px,
            var(--base-color) 100%,
            transparent 0
          ),
          radial-gradient(
            circle 4px at 18px 36px,
            var(--base-color) 100%,
            transparent 0
          ),
          radial-gradient(
            circle 4px at 30px 5px,
            var(--base-color) 100%,
            transparent 0
          ),
          radial-gradient(
            circle 4px at 30px 5px,
            var(--base-color) 100%,
            transparent 0
          ),
          radial-gradient(
            circle 4px at 30px 30px,
            var(--base-color) 100%,
            transparent 0
          ),
          radial-gradient(
            circle 4px at 5px 30px,
            var(--base-color) 100%,
            transparent 0
          ),
          radial-gradient(
            circle 4px at 5px 5px,
            var(--base-color) 100%,
            transparent 0
          );
        background-repeat: no-repeat;
        box-sizing: border-box;
        animation: rotationBack 3s linear infinite;
      }
      .loader::after {
        content: "";
        left: 35px;
        top: 15px;
        position: absolute;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: #fff;
        background-image: radial-gradient(
            circle 5px at 12px 12px,
            var(--base-color) 100%,
            transparent 0
          ),
          radial-gradient(
            circle 2.5px at 12px 0px,
            var(--base-color) 100%,
            transparent 0
          ),
          radial-gradient(
            circle 2.5px at 0px 12px,
            var(--base-color) 100%,
            transparent 0
          ),
          radial-gradient(
            circle 2.5px at 24px 12px,
            var(--base-color) 100%,
            transparent 0
          ),
          radial-gradient(
            circle 2.5px at 12px 24px,
            var(--base-color) 100%,
            transparent 0
          ),
          radial-gradient(
            circle 2.5px at 20px 3px,
            var(--base-color) 100%,
            transparent 0
          ),
          radial-gradient(
            circle 2.5px at 20px 3px,
            var(--base-color) 100%,
            transparent 0
          ),
          radial-gradient(
            circle 2.5px at 20px 20px,
            var(--base-color) 100%,
            transparent 0
          ),
          radial-gradient(
            circle 2.5px at 3px 20px,
            var(--base-color) 100%,
            transparent 0
          ),
          radial-gradient(
            circle 2.5px at 3px 3px,
            var(--base-color) 100%,
            transparent 0
          );
        background-repeat: no-repeat;
        box-sizing: border-box;
        animation: rotationBack 4s linear infinite reverse;
      }
      @keyframes rotationBack {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(-360deg);
        }
      }
    }
    .commu {
      display: flex;
      flex-direction: column;
      padding: 10px;
      p {
        border-left: solid 2px #0ad1c8;
        padding: 10px;
        width: 100%;
        margin-top: 30px;
        color: white;
        font-size: 1.1em;
        span {
          /* display: block; */
          color: #0ad1c8;
          font-size: 1.3em;
        }
      }
    }
  }

  .info-before-subscribe {
    width: 60%;
    /* background: yellow; */
    padding: 10px;
    margin: 10px 0px;
    p {
      border-left: solid 2px #0ad1c8;
      padding: 10px;
      width: 100%;
      margin-top: 10px;
      color: white;
      font-size: 1.1em;
      strong {
        /* display: block; */
        color: #0ad1c8;
        font-size: 1.3em;
      }
    }
  }

  .big-window {
    position: fixed;
    z-index: 20;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #213a57ad;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
  }

  //428px iphone 13 pro max
  @media screen and (max-width: 429px) {
    h1 {
      font-size: 1.6em;
      text-align: center;
    }
    h2,
    h3 {
      font-size: 1.2em;
      text-align: center;
    }
    .intro {
      width: 100%;
      padding: 5px;
      p {
        font-size: 1.1em;
      }
      .loader {
        width: 64px;
        height: 44px;
        /* position: relative;
      border: 5px solid #fff;
      border-radius: 8px; */
      }
    }
    .features {
      .commu {
        padding: 5px;
        p {
          font-size: 0.9em;
          margin-top: 20px;
          span {
            font-size: 1.1em;
          }
        }
      }
    }
    .features,
    .info-before-subscribe {
      width: 100%;
    }

    .info-before-subscribe {
      h3 {
        font-size: 2em;
      }
      .h-fin {
        font-size: 1.5em;
        color: #0ad1c8 !important;
      }
    }
    .info-before-subscribe > p {
      padding: 5px;
      margin-top: 5px;
      font-size: 0.9;
      strong {
        font-size: 1.1em;
      }
    }
  }
`;
