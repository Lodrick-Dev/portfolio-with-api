import React, { useState } from "react";
import { styled } from "styled-components";
import { Dynamic } from "../context/ToDynamicContext";
import Button from "./Button";
import FormConnect from "../components/Forms/FormConnect";
import FormRegister from "../components/Forms/FormRegister";
import { MdLogin } from "react-icons/md";

const PopUp = () => {
  const { setPopChange } = Dynamic();
  const [connect, setConnect] = useState(true);
  return (
    <StyledPopUp onClick={() => setPopChange(false)}>
      <div onClick={(e) => e.stopPropagation()}>
        <Button
          text={connect ? "S'inscrire" : "Connexion"}
          icon={<MdLogin />}
          actionClick={() => setConnect(!connect)}
        />
        {connect ? <FormConnect /> : <FormRegister />}
      </div>
    </StyledPopUp>
  );
};

export default PopUp;

const StyledPopUp = styled.div`
  position: fixed;
  z-index: 10;
  height: 100vh;
  width: 100%;
  top: 50%;
  right: 50%;
  background: #5e5e5d46;
  /* opacity: 0.5; */
  backdrop-filter: blur(5px);
  transform: translate(50%, -50%);
  overflow-y: hidden;
  div {
    height: 20vh;
    width: 12%;
    background: greenyellow;
  }
`;
