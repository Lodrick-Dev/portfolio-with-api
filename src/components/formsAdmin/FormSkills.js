import React from "react";
import { styled } from "styled-components";
import TitleMedium from "../../usables/TitleMedium";
import Button from "../../usables/Button";
import { MdOutlineExposurePlus1 } from "react-icons/md";

const FormSkills = () => {
  return (
    <StyledFormSkills>
      <TitleMedium text={"Ajouter une compétence"} />
      <input type="text" placeholder="Label" />
      <input type="text" placeholder="Compétence" />
      <Button text={"Ajouter"} icon={<MdOutlineExposurePlus1 />} />
    </StyledFormSkills>
  );
};

export default FormSkills;

const StyledFormSkills = styled.form`
  background: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-self: center;
  input {
    margin-top: 10px;
    padding: 5px;
    font-size: 1.2em;
    border: none;
    outline: none;
    border-bottom: solid 1.5px grey;
  }
`;
