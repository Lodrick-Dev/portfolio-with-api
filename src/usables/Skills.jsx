import React from "react";
import { styled } from "styled-components";
import { DataPublic } from "../context/DataPublicContext";
import TitleMedium from "./TitleMedium";
import { Dynamic } from "../context/ToDynamicContext";
import axios from "axios";

const Skills = () => {
  const { skillsPublic, callAfter, setCallAfter } = DataPublic();
  const { setAlert, idUser, location } = Dynamic();
  const deleteSkill = async (id, name) => {
    if (location.pathname !== "/admin") return;
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
      {/* <TitleMedium text={"Bon savoir"} /> */}
      {skillsPublic &&
        skillsPublic.map((skill) => (
          <li
            key={skill._id}
            onClick={() => deleteSkill(skill._id, skill.name)}
            className="animate__animated animate__backInRight animate__faster"
          >
            {skill.name}
          </li>
        ))}
    </StyledSkills>
  );
};

export default Skills;

const StyledSkills = styled.ul`
  /* width: 80%; */
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  &::-webkit-scrollbar {
    display: none;
  }
  /* background: yellow; */
  li {
    background: #22242d;
    padding: 0.5rem 1rem;
    border-radius: 12px;
    box-shadow: inset 2px 2px 5px #1a1b1f, inset -2px -2px 5px #34363f;
    color: #00ffd5;
    font-size: 0.9rem;
    cursor: ${({ $csstext }) => ($csstext ? "pointer" : "default")};
  }

  //responsive
  //884px = 768px
  @media screen and (max-width: 884px) {
    li {
      padding: 3px;
      font-size: 1em;
      margin: 3px;
    }
  }
  //428px iphone 13 pro max
  @media screen and (max-width: 428px) {
    /* background: red; */
    margin: 10px auto;
    width: 100%;
    li {
      padding: 3px;
      font-size: 0.8em;
      margin: 3px;
    }
  }
`;
