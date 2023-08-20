import React, { useEffect, useRef, useState } from "react";
import TitleMedium from "../../usables/TitleMedium";
import Button from "../../usables/Button";

import { MdOutlineCancel, MdOutlineDelete, MdUpdate } from "react-icons/md";
import { styled } from "styled-components";
import InputChangeImg from "../../usables/InputChangeImg";
import { DataPublic } from "../../context/DataPublicContext";
import Resizer from "react-image-file-resizer";

const FormProfil = () => {
  const { setDataProfil } = DataPublic();
  const { dataProfil } = DataPublic();
  const { dataProfilStatic } = DataPublic();
  const [watchToImg, setWatchToImg] = useState(true);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [imgSelectedPreview, setSelectedImgPreview] = useState("");
  const [imgUri, setImgUri] = useState("");
  const imageSelected = useRef(); //to component select img local
  const handleSubUpdate = (e) => {
    e.preventDefault();
    if (name || city || titre || description === "")
      return alert("Les champs sont vide");
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
    // description ? setWatchToImg(true) : setWatchToImg(false);
    // const keyExist = Object.keys(dataProfil);
    // console.log(keyExist);
    // keyExist.length > 0 ? setWatchToImg(true) : setWatchToImg(false);
    // if (name || city || titre || description === "") {
    //   setWatchToImg(false);
    // }

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
    //on recréer le tableau pour un preview
    // console.log("icici");
    // console.log(imgUri);
    // console.log(dataProfil);
    // console.log(dataProfil.title);
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
          placeholder={dataProfilStatic.pseudo}
          value={name ? name : ""}
          // value={dataProfil.pseudo || ""}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder={dataProfilStatic.localisation}
          // value={dataProfil.localisation || ""}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder={dataProfilStatic.title}
          // value={dataProfil.title || ""}
          onChange={(e) => setTitre(e.target.value)}
        />
        <textarea
          placeholder={dataProfilStatic.description}
          // value={dataProfil.description || ""}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <InputChangeImg
          actionClick={() => downImg()}
          imgSelectedCurrent={imageSelected}
          actionChange={(e) => setSelectedImgPreview(e.target.files[0])}
        />

        <Button
          text={
            titre || description || name || (city === "" && imgUri !== "")
              ? "Mettre à jour l'image"
              : "Mettre à mon profil"
          }
          icon={<MdUpdate />}
        />
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
  background: green;
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
`;
