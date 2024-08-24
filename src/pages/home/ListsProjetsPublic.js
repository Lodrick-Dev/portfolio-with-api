import React from "react";
import styled from "styled-components";
import { DataPublic } from "../../context/DataPublicContext";

const ListsProjetsPublic = () => {
  const { listProjets } = DataPublic();
  return (
    <StyledListsProjetsPublic>
      {listProjets ? (
        listProjets.map((projet) => (
          <li key={projet._id} className="li-list-projets">
            <div>
              <img src={projet.image} alt={projet.projet} />
              <strong>{projet.projet}</strong>
              <p>{projet.content}</p>
              <ul>
                {projet.skills
                  ? projet.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))
                  : undefined}
              </ul>
              <a href={projet.lien} target="_blank">
                Voir le projet
              </a>
            </div>
          </li>
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
  width: 90%;
  height: 100%;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  .li-list-projets {
    background: rgba(115, 113, 113, 0.67);
    display: flex;
    margin: 15px 5px;
    position: relative;
    padding: 5px;
    box-shadow: 3px 17px 19px -3px rgba(0, 0, 0, 0.45);
    border-radius: 10px;
    transition: 0.3s;
    div {
      padding: 5px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      img {
        /* color: #2d5092;
        background: #06ce8d; */
        margin-right: 20px;
        width: 20%;
        box-shadow: 3px 17px 19px -3px rgba(0, 0, 0, 0.45);
        border-radius: 10px;
      }
      strong {
        font-size: 1.7em;
      }
      p {
        width: 30%;
        font-size: 1.2em;
      }
      ul {
        /* background: blueviolet; */
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        padding: 5px;
        li {
          text-align: center;
          background: #2d5092;
          margin-top: 5px;
          padding: 5px;
          color: #06ce8d;
          font-size: 1.2em;
          border-radius: 5px;
        }
      }
      a {
        cursor: pointer;
        background: yellow;
        padding: 10px;
        border-radius: 5px;
        font-weight: 800;
        color: black;
        transition: 0.3s;
      }
      a:hover {
        scale: 1.1;
      }
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
