import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import TitleMedium from "../../usables/TitleMedium";
import Button from "../../usables/Button";
import { MdOutlinePostAdd } from "react-icons/md";
import { SlideInSection } from "../../context/SlideInSectionContext";
import InputChangeImg from "../../usables/InputChangeImg";
import CheckBox from "../adminComponents/CheckBox";
import { Dynamic } from "../../context/ToDynamicContext";
import axios from "axios";
const FormPost = ({ setSkillsSelect, skillsSelect }) => {
  const { idUser } = Dynamic();
  const { setFormPost } = SlideInSection(); //to preview post
  const { setPostPreview } = SlideInSection(); //to preview post
  const { postPreview } = SlideInSection(); //to preview post
  const { setImgPostPreview } = SlideInSection(); //to preview post > img
  const [toChangeImg, setToChangeImg] = useState(false);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const imgSelectedCurrent = useRef();
  const { setAlert } = Dynamic();
  const { setSpin } = Dynamic();
  const { spin } = Dynamic();

  //action fonction
  const changeImgCurrent = () => {
    imgSelectedCurrent.current.click();
  };

  const subForm = async (e) => {
    e.preventDefault();
    // setSpin(true);
    // alert("ici");
    console.log(postPreview);
    console.log(skillsSelect);
    if (name && link && description && skillsSelect.length > 0) {
      setSpin(true);
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URI}contents/add`,
        withCredentials: true,
        data: {
          posterid: idUser,
          projet: name,
          content: description,
          lien: link,
          skills: skillsSelect,
        },
      }).then((res) => {
        console.log(res);
        setSpin(false);
        if (res.data.error) return setAlert(res.data.error);
        if (res.data.message) {
          //on doit effacé les chmaps remettre a zéro
          //On n'a pas encore traité l'envoi d'image
          return setAlert(res.data.message);
        }
      });
    } else {
      return setAlert("Erreur : Les champs nécéssaires doivent être rempli");
    }
  };

  //useEffect
  useEffect(() => {
    if (name !== "") {
      setFormPost(true);
      setPostPreview([name, link, description]);
    } else {
      setFormPost(false);
    }
    // console.log(postPreview.length);
    //check if all index have value to display input file
    for (let i = 0; i < postPreview.length; i++) {
      if (postPreview[i] !== "") {
        setToChangeImg(true);
      } else {
        setToChangeImg(false);
      }
    }
  }, [name, link, description]);

  return (
    <StyledFormPost onSubmit={(e) => subForm(e)}>
      <TitleMedium text={"Poster un projet"} />
      <input
        type="text"
        placeholder="Nom*"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Lien*"
        onChange={(e) => setLink(e.target.value)}
      />
      <textarea
        placeholder="Description*"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <CheckBox setSkillsSelect={setSkillsSelect} skillsSelect={skillsSelect} />
      {toChangeImg && (
        <InputChangeImg
          actionClick={() => changeImgCurrent()}
          imgSelectedCurrent={imgSelectedCurrent}
          actionChange={(e) => setImgPostPreview(e.target.files[0])}
        />
      )}
      <Button text={"Poster"} icon={<MdOutlinePostAdd />} />
    </StyledFormPost>
  );
};

export default FormPost;
const StyledFormPost = styled.form`
  background: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 90%;
  input,
  textarea {
    width: 70%;
    padding: 5px;
    outline: none;
    border-radius: 5px;
    border: none;
    margin-top: 10px;
    font-size: 1.1em;
  }
  textarea {
    margin-top: 10px;
    height: 15vh;
  }
`;
