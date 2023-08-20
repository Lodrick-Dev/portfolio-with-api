import React from "react";
import { styled } from "styled-components";
import { ScrollSection } from "../context/ScrollSectionContext";

const Menu = () => {
  const { scrollSmooth } = ScrollSection();
  const { menuActif } = ScrollSection();
  return (
    <StyledMenu>
      <ul>
        <li
          onClick={() => scrollSmooth("profil-composant")}
          className={menuActif === "profil-composant" ? "actif-menu" : ""}
        >
          Accueil
        </li>
        <li
          onClick={() => scrollSmooth("projet-composant")}
          className={menuActif === "projet-composant" ? "actif-menu" : ""}
        >
          Réalisation
        </li>
        <li
          onClick={() => scrollSmooth("contact-composant")}
          className={menuActif === "contact-composant" ? "actif-menu" : ""}
        >
          Contact
        </li>
      </ul>
    </StyledMenu>
  );
};

export default Menu;
const StyledMenu = styled.header`
  padding: 10px;
  position: fixed;
  bottom: 0px;
  background: rgba(115, 113, 113, 0.67);
  backdrop-filter: blur(3px);
  width: 50%;
  height: 7vh;
  transform: translate(50%, 0%);
  border-radius: 5px 5px 0px 0px;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
  li {
    background: #0888bb;
    padding: 5px;
    width: 15%;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    color: #212121;
  }
  .actif-menu {
    transition: 0.5s;
    border-bottom: solid 5px pink;
  }
`;
