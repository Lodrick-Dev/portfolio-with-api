import React from "react";
import styled from "styled-components";
import { DataPublic } from "../../context/DataPublicContext";
import { COLORS } from "../../usables/COLORS";

const ListsProjetsPublic = () => {
  const { listProjets } = DataPublic();
  const goWatch = (link) => {
    window.open(link, "_blank");
  };

  return (
    <StyledListsProjetsPublic>
      {listProjets ? (
        listProjets.map((projet) => (
          <ul key={projet._id} className="li-list-projets">
            {/* <img src={projet.image} alt={projet.projet} /> */}
            <span onClick={() => goWatch(projet.lien)}>{projet.projet}</span>
            <li>{projet.content}</li>
          </ul>
        ))
      ) : (
        <li className="no-project-public">Aucun projet 😥</li>
      )}
    </StyledListsProjetsPublic>
  );
};

export default ListsProjetsPublic;

const StyledListsProjetsPublic = styled.ul`
  /* background: blue; */
  border-radius: 15px;
  /* padding: 10px; */
  display: flex;
  flex-direction: column;
  /* overflow-y: scroll; */
  .li-list-projets {
    display: flex;
    flex-direction: column;
    margin: 15px 5px;
    /* padding: 5px; */
    border-radius: 10px;
    transition: 0.3s;
    width: 100%;
    span {
      cursor: pointer;
      color: ${COLORS.accent};
    }
    li {
      width: 100%;
      color: ${COLORS.textPrimary};
    }
  }
  /* .li-list-projets:hover {
    transition: 0.2s;
    background: rgb(115 113 113 / 90%);
    transform: scale(1.05);
  } */
  //responsive
  //884px = 768px
  @media screen and (max-width: 429px) {
    /* background: #2d5092; */
    /* background: #06ce8d; */
    width: 100%;
    height: 100%;
    align-items: flex-start;
    flex-direction: column;
    padding: 0px;
    li {
      flex-direction: column;
      padding: 0px;
      width: 100%;
      div {
        flex-direction: column;
        width: 100%;
        padding: 0px;
        img {
          width: 60% !important;
          margin-bottom: 10px;
        }
        p {
          width: 100% !important;
          margin: 10px 0px;
        }
        ul {
          flex-direction: row !important;
          flex-wrap: wrap;
          width: 100%;
          li {
            width: 40%;
            margin: 10px;
          }
        }
      }
    }
  }
`;
