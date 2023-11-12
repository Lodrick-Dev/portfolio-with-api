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
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .li-list-projets {
    cursor: pointer;
    width: 25%;
    height: 35vh;
    background: rgba(115, 113, 113, 0.67);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    position: relative;
    /* padding: 5px; */
    box-shadow: 3px 17px 19px -3px rgba(0, 0, 0, 0.45);
    border-radius: 10px;
    transition: 0.3s;
  }
  .li-list-projets:hover {
    transition: 0.2s;
    background: rgb(115 113 113 / 90%);
    transform: scale(1.05);
  }
  .li-list-projets:hover > div > strong {
    z-index: 21;
    color: white;
  }
  .li-list-projets:hover > div > p {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    height: 100%;
    background: #39393a;
    color: yellow;
    font-size: 1.1em;
    width: 100%;
    text-align: center;
    padding: 5px;
    text-shadow: 2px 2px 4px rgb(29 29 29);
    border-radius: 10px;
  }
  .li-list-projets:hover > div > a {
    z-index: 21;
  }
  li > div {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  li > div > strong {
    display: block;
    /* color: #06ce8d; */
    /* color: yellow; */
    color: #2d5092;
    position: absolute !important;
    top: 5px;
    width: 100%;
    text-align: center;
    font-size: 1.1em;
  }
  li > div strong,
  li > div p,
  li > div a,
  li > div ul {
    position: relative;
    z-index: 1;
  }
  li > div p {
    display: none;
    /* position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    height: 100%;
    background: blue;
    color: yellow;
    font-size: 1.1em;
    width: 100%;
    text-align: center;
    padding: 5px;
    text-shadow: 2px 2px 4px rgb(29 29 29); */
  }
  li > div a {
    display: block;
    position: absolute;
    bottom: 5px;
    padding: 5px;
    background: yellow;
    width: 50%;
    text-align: center;
    font-size: 0.7em;
    border-radius: 5px;
    color: black;
    font-weight: 700;
  }
  li > div > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    /* background: grey; */
    width: 100%;
    height: 35%;
  }
  li > div ul > li {
    /* background: violet; */
    background: #06ce8d;
    color: yellow;
    padding: 3px;
    /* width: 35%; */
    margin: 5px;
    border-radius: 5px;
  }
  li > div > img {
    width: 50%;
    top: 50%;
    right: 50%;
    position: absolute;
    transform: translate(50%, -50%);
    z-index: 0;
    box-shadow: 3px 17px 19px -3px rgba(0, 0, 0, 0.45);
    border-radius: 10px;
  }
  //responsive
  //884px = 768px
  @media screen and (max-width: 884px) {
    /* background: #2d5092; */
    width: 100%;
    height: 0px;
    /* justify-content: flex-start; */
    align-items: flex-start;
    .li-list-projets {
      width: 30%;
      height: 30vh;
      margin: 10px;
    }
    li > div > img {
      width: 80%;
    }
  }

  //428px iphone 13 pro max
  @media screen and (max-width: 428px) {
    .li-list-projets {
      width: 45%;
    }
    li > div > img {
      width: 90%;
    }
    li > div > ul {
      /* background: blue; */
      justify-content: flex-start;
      height: 5vh;
      flex-wrap: nowrap;
      overflow-x: scroll;
    }
    li > div ul > li {
      display: block;
      font-size: 0.7em;
      width: 85%;
      padding: 5px;
      text-align: center;
    }
  }
  //360px iphone 12 mini
  @media screen and (max-width: 360px) {
    padding: 0px;
    .li-list-projets {
      width: 47%;
      margin: 10px 3px !important;
    }
    li > div > ul {
      height: 10vh !important;
      overflow-y: none !important;
      justify-content: flex-start;
    }
  }
  //390px iphone 12
  @media screen and (max-width: 390px) {
    .li-list-projets {
      margin: 10px 3px !important;
    }
    li > div > ul {
      height: 10vh !important;
      overflow-y: hidden !important;
    }
  }
  //414px iphone Xr
  @media screen and (max-width: 415px) {
    .li-list-projets {
      margin: 10px 3px !important;
    }
    li > div > ul {
      height: 10vh !important;
      overflow-y: hidden !important;
      justify-content: flex-start;
    }
  }
`;
