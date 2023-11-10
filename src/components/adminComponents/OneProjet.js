import React from "react";
import styled from "styled-components";
import TitleMedium from "../../usables/TitleMedium";
import ListsSkillsToPost from "../../usables/ListsSkillsToPost";
import { Dynamic } from "../../context/ToDynamicContext";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { DataPublic } from "../../context/DataPublicContext";
import Image from "../../usables/Image";

const OneProjet = ({ projetSelected, setProjetSelected }) => {
  const { setSkillsSelect } = Dynamic();
  const { setAlert } = Dynamic();
  const { setCallAfter, callAfter } = DataPublic();
  const initialiseToClosePop = () => {
    setProjetSelected(null);
    setSkillsSelect([]);
  };
  const deleteSelect = async (id, name) => {
    if (window.confirm(`Ok pour supprimer ${name} ?`)) {
      try {
        await axios({
          method: "delete",
          url: `${process.env.REACT_APP_API_URI}contents/${id}`,
          withCredentials: true,
        }).then((res) => {
          if (res.data.error) return setAlert(res.data.error);
          if (res.data.message) {
            if (res.data.message.includes("Erreur")) {
              return setAlert(res.data.message);
            } else {
              setProjetSelected(null);
              setSkillsSelect([]);
              setCallAfter(!callAfter);
              return setAlert(res.data.message);
            }
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <StyledOneProjet onClick={() => initialiseToClosePop()}>
      <div onClick={(e) => e.stopPropagation()} className="stop-pro">
        <MdDelete
          className="deleteObj"
          onClick={() =>
            deleteSelect(projetSelected._id, projetSelected.projet)
          }
        />
        <TitleMedium text={projetSelected.projet} />
        <p>{projetSelected.content}</p>
        <a href={projetSelected.lien} target="_blank">
          Le lien : {projetSelected.lien}
        </a>
        <ListsSkillsToPost />
        <Image img={projetSelected.image} legend={projetSelected.projet} />
      </div>
    </StyledOneProjet>
  );
};

export default OneProjet;

const StyledOneProjet = styled.div`
  position: fixed;
  z-index: 10;
  height: 100vh;
  width: 100%;
  top: 50%;
  right: 50%;
  background: #5e5e5d46;
  /* padding: 10px; */
  backdrop-filter: blur(5px);
  transform: translate(50%, -50%);
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  .stop-pro {
    background: blueviolet;
    height: 70%;
    padding: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }
  .stop-pro > .deleteObj {
    position: absolute;
    z-index: 15;
    cursor: pointer;
    right: 5px;
    top: 5px;
    color: red;
    background: #ffe6e6;
    border-radius: 5px;
    padding: 5px;
    font-size: 2em;
  }
  //responsive
  //884px = 768px
  @media screen and (max-width: 884px) {
    .stop-pro {
      width: 80%;
      padding: 20px;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .stop-pro > p {
      margin: 15px 0px;
      font-size: 1.7em;
    }
    .stop-pro > a {
      font-size: 1.5em;
    }
  }
  //428px iphone 13 pro max
  @media screen and (max-width: 428px) {
    .stop-pro {
      width: 95%;
    }
    .stop-pro > p {
      font-size: 1.5em;
    }
  }
`;
