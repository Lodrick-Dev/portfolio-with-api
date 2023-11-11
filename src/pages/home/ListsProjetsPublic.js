import React from "react";
import styled from "styled-components";
import { DataPublic } from "../../context/DataPublicContext";

const ListsProjetsPublic = () => {
  const { listProjets } = DataPublic();
  return (
    <StyledListsProjetsPublic>
      {listProjets ? (
        listProjets.map((projet) => (
          <li key={projet._id}>
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
  width: 80%;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  li {
    width: 15%;
    background: rgba(115, 113, 113, 0.67);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    position: relative;
    padding: 5px;
    box-shadow: 3px 17px 19px -3px rgba(0, 0, 0, 0.45);
    border-radius: 10px;
  }
  li > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  li > div strong,
  li > div p,
  li > div a,
  li > div ul {
    position: relative;
    z-index: 1;
  }
  li > div > img {
    width: 95%;
    top: 50%;
    right: 50%;
    position: absolute;
    transform: translate(50%, -50%);
    z-index: 0;
    box-shadow: 3px 17px 19px -3px rgba(0, 0, 0, 0.45);
    border-radius: 10px;
  }
`;
