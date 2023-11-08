import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import TitleMedium from "../../usables/TitleMedium";
import Button from "../../usables/Button";
import { MdOutlinePostAdd } from "react-icons/md";
import { SlideInSection } from "../../context/SlideInSectionContext";
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
    setImgPostPreview,
    imgPostPreview,
  } = SlideInSection(); //to preview post
  const [toChangeImg, setToChangeImg] = useState(false);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  let data;

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
          img: imgPostPreview ? 1 : undefined,
        },
      }).then((res) => {
        console.log(res);
        if (res.data.id) {
          console.log("ici bro");
          //on doit effacé les chmaps remettre a zéro après l'envoie de l'image
          sendImg(res.data.id);
          // setName("");
          // setDescription("");
          // setLink("");
          // setSkillsSelect([]);
        }
        if (!imgPostPreview) {
          console.log(res);
          setName("");
          setDescription("");
          setLink("");
          setSkillsSelect([]);
          setCallAgain(!callAgain);
          setImgPostPreview(null);
          setSpin(false);
          return setAlert(res.data.message);
        }
        // else {
        //   console.log(res);
        //   setName("");
        //   setDescription("");
        //   setLink("");
        //   setSkillsSelect([]);
        //   setCallAgain(!callAgain);
        //   setSpin(false);
        // }
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
      return setAlert("Erreur : Les champs nécéssaires doivent être rempli");
    }
  };

  const sendImg = async (id) => {
    //id vient de res.data.id,
    // method "put"
    try {
      // Pour convertir en img,Créer un objet File à partir de imgPostPreview
      const base64Image = imgPostPreview.replace(
        /^data:image\/(png|jpeg);base64,/,
        ""
      );
      const byteCharacters = atob(base64Image);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: "image/png" });
      const imageFile = new File([blob], "image.png", { type: "image/png" });

      // Créer un objet FormData et ajouter l'image
      const formData = new FormData();
      formData.append("id", id);
      formData.append("imgpostupload", imageFile);
      await axios({
        method: "put",
        url: `${process.env.REACT_APP_API_URI}post/update/img/${id}`,
        withCredentials: true,
        data: formData,
      }).then((res) => {
        setAlert(res.data.message);
        setSpin(false);
        setCallAgain(!callAgain);
        setImgPostPreview(null);
        setName("");
        setDescription("");
        setLink("");
        setSkillsSelect([]);
      });
    } catch (error) {
      console.log(error);
      return;
    }
  };
  //to capture apercu url
  const viewCaptureUrl = async () => {
    console.log(link);
    const regex = /https?:\/\/[^\s/$.?#].[^\s]*/;
    if (!regex.test(link)) {
      return setAlert("Erreur : Lien incorrect");
    }
    try {
      axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URI}preview/url`,
        withCredentials: true,
        data: {
          url: link,
        },
      }).then((res) => {
        setImgPostPreview(res.data);
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
    // for (let i = 0; i < postPreview.length; i++) {
    //   if (postPreview[i] !== "") {
    //     setToChangeImg(true);
    //   } else {
    //     setToChangeImg(false);
    //   }
    // }
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
