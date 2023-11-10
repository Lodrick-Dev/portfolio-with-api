import React, { useEffect, useRef, useState } from "react";
import TitleMedium from "../../usables/TitleMedium";
import Button from "../../usables/Button";

import { MdOutlineCancel, MdOutlineDelete, MdUpdate } from "react-icons/md";
import { styled } from "styled-components";
import InputChangeImg from "../../usables/InputChangeImg";
import { DataPublic } from "../../context/DataPublicContext";
import Resizer from "react-image-file-resizer";
import { Dynamic } from "../../context/ToDynamicContext";
import axios from "axios";

const FormProfil = () => {
  const { setDataProfil, dataProfil, dataProfilStatic, getDataProfil } =
    DataPublic();
  const { setAlert, idUser, spin, setSpin } = Dynamic();
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [imgSelectedPreview, setSelectedImgPreview] = useState("");
  const [imgUri, setImgUri] = useState("");
  const imageSelected = useRef(); //to component select img local
  let data;
  const justImgProfil = async (img, id) => {
    //profil/upload/aws
    data = new FormData();
    data.append("imageprofil", img);
    data.append("id", id);
    try {
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URI}profil/upload/aws`,
        withCredentials: true,
        data,
      }).then((res) => {
        console.log(res);
        //On vide l'img du preview
        setImgUri("");
        setSelectedImgPreview("");
        setSpin(false);
        if (res.data.error) return setAlert(res.data.error);
        if (res.data.message) return setAlert(res.data.message);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const someUpdateOrAll = async (
    name,
    city,
    titre,
    description,
    imgSelectedPreview
  ) => {
    try {
      await axios({
        method: "put",
        url: `${process.env.REACT_APP_API_URI}user/${idUser}`,
        withCredentials: true,
        data: {
          pseudo: name ? name : dataProfilStatic.pseudo,
          localisation: city ? city : dataProfilStatic.localisation,
          title: titre ? titre : dataProfilStatic.title,
          description: description ? description : dataProfilStatic.description,
        },
      }).then((res) => {
        console.log(res);
        getDataProfil();
        if (res.data.message) {
          if (res.data.message.includes("Erreur")) {
            return setAlert(res.data.message);
          } else {
            if (imgSelectedPreview) {
              justImgProfil(imgSelectedPreview, idUser);
            }
          }
          //si une info seulement
          return setAlert(res.data.message);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubUpdate = (e) => {
    e.preventDefault();
    setSpin(true);
    if (!name && !city && !titre && !description) {
      if (imgSelectedPreview) {
        //juste img
        // return setAlert("Tous les champs sont vide sauf img donc on envoi");
        console.log("just ici haha");
        justImgProfil(imgSelectedPreview, idUser);
      } else {
        setSpin(false);
        return setAlert("Erreur : Les champs sont vides");
      }
    } else {
      //si un des deux variable son rempli  on vient ici
      if (name || city || titre || description || imgSelectedPreview) {
        //ne pas oublié prendre l'image en compte ici
        setSpin(false);
        console.log("mainetnat on est la haha");
        someUpdateOrAll(name, city, titre, description, imgSelectedPreview);
      }
    }
  };

  //to download picture local
  const downImg = () => {
    imageSelected.current.click();
  };

  const deleteImgSelected = () => {
    setSelectedImgPreview("");
    setImgUri("");
    setDataProfil((prevData) => ({
      ...prevData,
      picture: dataProfilStatic.picture,
    }));
    console.log(dataProfil);
    console.log(dataProfilStatic);
  };

  const cancelTypeUser = () => {
    setDataProfil([]);
    setName("");
    setCity("");
    setTitre("");
    setDescription("");
    setImgUri("");
    setSelectedImgPreview("");
    setDataProfil(dataProfilStatic);
    console.log(dataProfil);
  };

  //to preview
  useEffect(() => {
    if (imgSelectedPreview) {
      Resizer.imageFileResizer(
        imgSelectedPreview,
        1080,
        1080,
        "PNG",
        100,
        0,
        (url) => {
          setImgUri(url);
        },
        "base64"
      );
    }
    setDataProfil((prevData) => ({
      ...prevData,
      title: titre ? titre : dataProfilStatic.title,
      pseudo: name ? name : dataProfilStatic.pseudo,
      localisation: city ? city : dataProfilStatic.localisation,
      description: description ? description : dataProfilStatic.description,
      picture: imgUri ? imgUri : dataProfilStatic.picture,
    }));
    // console.log("====================================");
    // console.log(dataProfil);
    // console.log("====================================");
  }, [name, city, titre, description, imgUri, imgSelectedPreview]);

  return (
    <StyledFormProfil>
      <form onSubmit={(e) => handleSubUpdate(e)}>
        <TitleMedium text={"Mon profil"} />
        <input
          type="text"
          placeholder={
            dataProfilStatic.pseudo ? dataProfilStatic.pseudo : "Pseudo"
          }
          value={name ? name : ""}
          // value={dataProfil.pseudo || ""}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder={
            dataProfilStatic.localisation
              ? dataProfilStatic.localisation
              : "Lieu"
          }
          // value={dataProfil.localisation || ""}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder={
            dataProfilStatic.title ? dataProfilStatic.title : "Titre"
          }
          // value={dataProfil.title || ""}
          onChange={(e) => setTitre(e.target.value)}
        />
        <textarea
          placeholder={
            dataProfilStatic.description
              ? dataProfilStatic.description
              : "Description"
          }
          // value={dataProfil.description || ""}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <InputChangeImg
          actionClick={() => downImg()}
          imgSelectedCurrent={imageSelected}
          actionChange={(e) => setSelectedImgPreview(e.target.files[0])}
        />

        <Button text={"Mettre à mon profil"} icon={<MdUpdate />} />
        {titre || description || name || city || imgUri ? (
          <Button
            text={"Annuler"}
            icon={<MdOutlineCancel />}
            actionClick={() => cancelTypeUser()}
          />
        ) : undefined}
      </form>
      {imgUri && (
        <div id="delete" onClick={() => deleteImgSelected()}>
          <MdOutlineDelete />
          <span>Effacé l'image</span>
        </div>
      )}
    </StyledFormProfil>
  );
};

export default FormProfil;

const StyledFormProfil = styled.div`
  /* background: green; */
  padding: 10px;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  position: relative;
  #delete {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    top: 10px;
    right: 10px;
    background: pink;
    box-shadow: 1px 9px 12px 0px rgba(0, 0, 0, 0.41);
    -webkit-box-shadow: 1px 9px 12px 0px rgba(0, 0, 0, 0.41);
    -moz-box-shadow: 1px 9px 12px 0px rgba(0, 0, 0, 0.41);
  }
  #delete > span {
    font-size: 0.8em;
  }
  form {
    display: flex;
    /* background: red; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin: 15px auto;
  }
  form > input,
  textarea {
    width: 100%;
    margin-top: 10px;
    padding: 3px;
    font-size: 1.2em;
    border-radius: 3px;
    outline: none;
    border: none;
  }
  form > textarea {
    height: 15vh;
  }
  //responsive
  //884px = 768px
  @media screen and (max-width: 884px) {
    padding: 3px;
    width: 30%;
    form {
      width: 100%;
    }
    #delete {
      width: 50%;
    }
  }
  //428px iphone 13 pro max
  @media screen and (max-width: 428px) {
    width: 90%;
    /* background: blue; */
  }
`;
