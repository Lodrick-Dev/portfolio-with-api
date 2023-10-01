import React, { useState } from "react";
import { DataPublic } from "../context/DataPublicContext";
import styled from "styled-components";
import OneProjet from "../components/adminComponents/OneProjet";
import { Dynamic } from "../context/ToDynamicContext";

const ListsProjets = () => {
  const { listProjets } = DataPublic();
  const { skillsSelect } = Dynamic();
  const { setSkillsSelect } = Dynamic();
  const [projetSelected, setProjetSelected] = useState(null);
  const projetSelect = (id) => {
    const selected = listProjets.find((objet) => objet._id === id);

    setProjetSelected(selected);
    setSkillsSelect(selected.skills);
    console.log(selected.skills);
    console.log(skillsSelect);
    console.log(projetSelected);
  };
  return (
    <StyledListsProjets>
      {projetSelected && (
        <OneProjet
          projetSelected={projetSelected}
          setProjetSelected={setProjetSelected}
        />
      )}
      {listProjets ? (
        listProjets.map((projet) => (
          <li key={projet._id} onClick={() => projetSelect(projet._id)}>
            {projet.projet}
          </li>
        ))
      ) : (
        <li className="not-projet">Aucun projet</li>
      )}
    </StyledListsProjets>
  );
};

export default ListsProjets;

const StyledListsProjets = styled.ul`
  background: pink;
  margin: 10px auto;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    font-size: 1.5em;
    margin: 10px;
    background: greenyellow;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
  }

  .not-projet {
    font-size: 1.3em;
    cursor: alias;
  }
`;
