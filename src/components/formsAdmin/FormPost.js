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
import { DataPublic } from "../../context/DataPublicContext";
const FormPost = ({ setSkillsSelect, skillsSelect }) => {
  const { idUser, setAlert, setSpin } = Dynamic();
  const { setCallAgain, callAgain } = DataPublic();
  const {
    setFormPost,
    setPostPreview,
    postPreview,
    imgPostPreview,
    setImgPostPreview,
  } = SlideInSection(); //to preview post
  const [toChangeImg, setToChangeImg] = useState(false);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const imgSelectedCurrent = useRef();
  const [previewUrl, setPreviewUrl] = useState("");
  let data;

  //small fonction to prepare to img
  const prepareImg = (img, id) => {
    data = new FormData();
    data.append("imgpostupload", img);
    data.append("id", id);
  };
  //action fonction
  const changeImgCurrent = () => {
    imgSelectedCurrent.current.click();
  };

  const subForm = async (e) => {
    e.preventDefault();
    setSpin(true);
    // alert("ici");
    console.log(postPreview);
    console.log(skillsSelect);
    if (name && link && description && skillsSelect.length > 0) {
      // setSpin(false);
      console.log(data);
      // return;
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
          img: imgPostPreview ? "data" : undefined,
        },
      }).then((res) => {
        console.log(res);
        if (res.data.id) {
          //Traitement img ici
          prepareImg(imgPostPreview, res.data.id);
          sendImg(res.data.id);
          //on doit effacé les chmaps remettre a zéro après l'envoie de l'image
          setName("");
          setDescription("");
          setLink("");
          setSkillsSelect([]);
          setImgPostPreview(null);
          // setCallAgain(!callAgain);
          // setSpin(false);
        } else {
          console.log(res);
          setName("");
          setDescription("");
          setLink("");
          setSkillsSelect([]);
          setImgPostPreview(null);
          setCallAgain(!callAgain);
          setSpin(false);
        }
        if (res.data.error) {
          setSpin(false);
          return setAlert(res.data.error);
        } else {
          setSpin(false);
          return setAlert(res.data.message);
        }
      });
    } else {
      setSpin(false);
      viewCaptureUrl();
      return setAlert("Erreur : Les champs nécéssaires doivent être rempli");
    }
  };

  const sendImg = async (id) => {
    //id vient de res.data.id,
    // method "put"
    try {
      await axios({
        method: "put",
        url: `${process.env.REACT_APP_API_URI}post/update/img/${id}`,
        withCredentials: true,
        data,
      }).then((res) => {
        console.log(res);

        setAlert(res.data.message);
        setSpin(false);
        setCallAgain(!callAgain);
      });
    } catch (error) {
      console.log(error);
      return;
    }
  };
  //to capture apercu url
  const viewCaptureUrl = async () => {
    try {
      axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URI}preview/url`,
        withCredentials: true,
        responseType: "blob",
      }).then((res) => {
        console.log(res.data);
        const blob = new Blob([res.data]);
        const urlBlob = URL.createObjectURL(blob);
        setPreviewUrl(urlBlob);
      });
    } catch (error) {
      console.log(error);
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
        value={name ? name : ""}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Lien*"
        value={link ? link : ""}
        onChange={(e) => setLink(e.target.value)}
        onBlur={() => viewCaptureUrl()}
      />
      <textarea
        placeholder="Description*"
        value={description ? description : ""}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <CheckBox />
      {toChangeImg && (
        <InputChangeImg
          actionClick={() => changeImgCurrent()}
          imgSelectedCurrent={imgSelectedCurrent}
          actionChange={(e) => setImgPostPreview(e.target.files[0])}
        />
      )}
      {previewUrl && <img src={previewUrl} alt="appercu" />}
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
  img {
    width: 100%;
    /* height: 25px; */
  }
`;
