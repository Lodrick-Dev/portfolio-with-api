import React from "react";
import styled from "styled-components";
import TitleMedium from "../usables/TitleMedium";
import TitleLittle from "../usables/TitleLittle";
import { Dynamic } from "../context/ToDynamicContext";

const BoxNavDeconnect = () => {
  const { navigue } = Dynamic();
  const { setPopChange } = Dynamic();
  const goAdmin = () => {
    setPopChange(false);
    navigue("/admin");
  };
  const deconnect = async () => {
    if (
      window.confirm(
        "Vous êtes sur le point de vous déconnecter, continuer la déconnexion ?"
      )
    ) {
      //ici déconnexion
      alert("déconnection");
    }
  };
  return (
    <StyledBoxNavDeconnect onClick={(e) => e.stopPropagation()}>
      <TitleMedium text={"Admin"} actionClick={() => goAdmin()} />
      <TitleLittle text={"Déconnexion"} actionClick={() => deconnect()} />
    </StyledBoxNavDeconnect>
  );
};

export default BoxNavDeconnect;

const StyledBoxNavDeconnect = styled.div`
  background: grey;
  height: 20vh;
  width: 20%;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
