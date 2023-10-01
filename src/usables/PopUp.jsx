import React, { useState } from "react";
import { styled } from "styled-components";
import { Dynamic } from "../context/ToDynamicContext";
import BoxConnectRegister from "../components/BoxConnectRegister";
import BoxNavDeconnect from "../components/BoxNavDeconnect";

const PopUp = () => {
  const { setPopChange } = Dynamic();
  const { idUser } = Dynamic();
  return (
    <StyledPopUp onClick={() => setPopChange(false)}>
      {idUser ? <BoxNavDeconnect /> : <BoxConnectRegister />}
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
  display: flex;
  justify-content: center;
  align-items: center;
`;
