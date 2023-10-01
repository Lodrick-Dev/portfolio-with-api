import React from "react";
import { styled } from "styled-components";
import { DataPublic } from "../context/DataPublicContext";
import TitleMedium from "./TitleMedium";
import { Dynamic } from "../context/ToDynamicContext";
import axios from "axios";

const Skills = () => {
  const { skillsPublic } = DataPublic();
  const { setAlert } = Dynamic();
  const { idUser } = Dynamic();
  const { callAfter, setCallAfter } = DataPublic();
  const deleteSkill = async (id, name) => {
    if (
      window.confirm(
        `Êtes-vous sûr de vouloir supprimer cette compétence : ${name}`
      )
    ) {
      try {
        await axios({
          method: "delete",
          url: `${process.env.REACT_APP_API_URI}skill/${id}`,
          withCredentials: true,
        }).then((res) => {
          console.log(res);
          if (res.data.error) return setAlert(res.data.error);
          if (res.data.message) {
            setAlert(res.data.message);
            setCallAfter(!callAfter);
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <StyledSkills $csstext={idUser}>
      <TitleMedium text={"Bon savoir"} />
      {skillsPublic &&
        skillsPublic.map((skill) => (
          <li
            key={skill._id}
            onClick={() => deleteSkill(skill._id, skill.name)}
          >
            {skill.name}
          </li>
        ))}
    </StyledSkills>
  );
};

export default Skills;

const StyledSkills = styled.ul`
  width: 80%;
  margin: 25px auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: yellow;
  h2 {
    width: 100%;
    background: blueviolet;
    text-align: center;
  }
  li {
    padding: 10px;
    font-size: 1.2em;
    margin: 10px;
    border-radius: 5px;
    background: greenyellow;
    cursor: ${({ $csstext }) => ($csstext ? "pointer" : "alias")};
  }
`;
