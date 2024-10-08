import React, { useEffect, useRef, useState } from "react";
import { DataPublic } from "../../context/DataPublicContext";
import { styled } from "styled-components";
import { Dynamic } from "../../context/ToDynamicContext";

// const CheckBox = ({ setSkillsSelect, skillsSelect }) => {
const CheckBox = () => {
  const { skillsSelect, setSkillsSelect } = Dynamic();
  const { skillsPublic, callAgain } = DataPublic();
  const listCheckBox = useRef([]);
  const checkedSkill = (e, id) => {
    const checkBox = listCheckBox.current[id];
    if (checkBox) {
      checkBox.click();
      // console.log(e.target);
      e.target.classList.toggle("box-checked");
      //   console.log("ici vo");
    }
  };
  const addSkillToProjet = (name) => {
    console.log(skillsSelect);
    if (!skillsSelect.includes(name)) {
      setSkillsSelect((prev) => [...prev, name]);
    } else {
      setSkillsSelect((prev) => prev.filter((skill) => skill !== name));
    }
  };

  //pour vérifié si les checkbox sont checked toujours apres envoi
  //du formulaire
  useEffect(() => {
    const initClass = () => {
      const lists = document.querySelectorAll(".input-check-box");
      lists.forEach((el) => {
        el.checked = false;
        // console.log(el.parentNode);
        el.parentNode.classList.remove("box-checked");
      });
    };
    if (skillsSelect.length < 1) {
      initClass();
      console.log("on vide");
    } else {
      console.log(skillsSelect);
      console.log("on vide pas");
    }
  }, [callAgain]);

  return (
    <StyledCheckBox>
      {skillsPublic.map((skill) => (
        <div key={skill._id} onClick={(e) => checkedSkill(e, skill._id)}>
          <label htmlFor={skill.label}>{skill.name}</label>
          <input
            className="input-check-box"
            type="checkbox"
            id={skill.label}
            onChange={() => addSkillToProjet(skill.name)}
            ref={(el) => (listCheckBox.current[skill._id] = el)}
          />
        </div>
      ))}
    </StyledCheckBox>
  );
};

export default CheckBox;

const StyledCheckBox = styled.div`
  background: greenyellow;
  width: 70%;
  height: 30vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 5px;
  overflow-y: scroll;
  div {
    background: grey;
    /* width: 25%; */
    padding: 5px;
    cursor: pointer;
    border-radius: 5px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  div > label,
  div > input {
    pointer-events: none;
  }
  .box-checked {
    background: red;
  }
  //responsive
  //884px = 768px
  @media screen and (max-width: 884px) {
    flex-wrap: wrap;
    /* width: 100%; */
    div {
      margin: 5px;
      width: 40%;
    }
    div > label {
      font-size: 0.8em;
    }
  }
  //428px iphone 13 pro max
  @media screen and (max-width: 428px) {
    /* width: 30%; */
    height: 15vh;
    div > label {
      font-size: 0.7em;
    }
  }
  //360 Iphone 12 mini
  @media screen and (max-width: 360px) {
    div {
      padding: 3px;
      margin: 5px;
    }
    div > input {
      display: none;
      margin-top: 3px;
    }
  }
`;
