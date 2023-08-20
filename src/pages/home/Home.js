import React from "react";
import Profil from "../../components/Profil";
import Logo from "../../usables/Logo";
import Menu from "../../usables/Menu";
import Projets from "../../usables/Projets";
import Contact from "../../components/Contact";
import { ScrollSection } from "../../context/ScrollSectionContext";

const Home = () => {
  const { location } = ScrollSection();
  const { scrollSmooth } = ScrollSection();
  const scrolling = () => {
    if (location.pathname === "/") {
      return scrollSmooth("profil-composant");
    }
  };
  return (
    <div>
      <Logo actionClick={() => scrolling()} />
      <Profil />
      <Projets />
      <Contact />
      <Menu />
    </div>
  );
};

export default Home;
