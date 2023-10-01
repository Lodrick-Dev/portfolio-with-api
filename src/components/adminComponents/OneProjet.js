import React from "react";
import styled from "styled-components";
import TitleMedium from "../../usables/TitleMedium";
import ListsSkillsToPost from "../../usables/ListsSkillsToPost";
import { Dynamic } from "../../context/ToDynamicContext";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { DataPublic } from "../../context/DataPublicContext";

const OneProjet = ({ projetSelected, setProjetSelected }) => {
  const { setSkillsSelect } = Dynamic();
  const { setAlert } = Dynamic();
  const { setCallAfter, callAfter } = DataPublic();
  const initialiseToClosePop = () => {
    setProjetSelected(null);
    setSkillsSelect(null);
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
              setSkillsSelect(null);
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
      <div onClick={(e) => e.stopPropagation()}>
        <MdDelete
          className="deleteObj"
          onClick={() =>
            deleteSelect(projetSelected._id, projetSelected.projet)
          }
        />
        <TitleMedium text={projetSelected.projet} />
        <p>{projetSelected.content}</p>
        <a href={projetSelected.lien}>Le lien : {projetSelected.lien}</a>
        <ListsSkillsToPost />
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
  /* opacity: 0.5; */
  backdrop-filter: blur(5px);
  transform: translate(50%, -50%);
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    background: blueviolet;
    padding: 10px;
    position: relative;
  }
  div > .deleteObj {
    position: absolute;
    right: 5px;
    top: 5px;
    color: red;
    background: #ffe6e6;
    border-radius: 5px;
    padding: 5px;
    font-size: 2em;
  }
`;
