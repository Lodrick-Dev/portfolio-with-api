import React, { useState } from "react";
import { styled } from "styled-components";
import TitleMedium from "../../usables/TitleMedium";
import Button from "../../usables/Button";
import { MdOutlineExposurePlus1 } from "react-icons/md";
import axios from "axios";
import { Dynamic } from "../../context/ToDynamicContext";
import { DataPublic } from "../../context/DataPublicContext";

const FormSkills = () => {
  const [label, setLabel] = useState("");
  const [name, setName] = useState("");
  const { setAlert } = Dynamic();
  const { callAgain } = DataPublic();
  const { setCallAgain } = DataPublic();
  const addSkill = async (e) => {
    e.preventDefault();
    if (!label || !name)
      return setAlert("Erreur : Veuillez remplir tous les champs");

    try {
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URI}skill/add`,
        withCredentials: true,
        data: {
          label,
          name,
        },
      }).then((res) => {
        console.log(res);
        if (res.data.error) return setAlert(res.data.error);
        if (res.data.message) {
          setLabel("");
          setName("");
          setAlert(res.data.message);
          setCallAgain(!callAgain);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <StyledFormSkills onSubmit={(e) => addSkill(e)}>
      <TitleMedium text={"Ajouter une compétence"} />
      <input
        type="text"
        placeholder="Label"
        value={label ? label : ""}
        onChange={(e) => setLabel(e.target.value)}
      />
      <input
        type="text"
        placeholder="Compétence"
        value={name ? name : ""}
        onChange={(e) => setName(e.target.value)}
      />
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
