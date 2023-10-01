import React, { useEffect } from "react";
import Profil from "../../components/Profil";
import Logo from "../../usables/Logo";
import Menu from "../../usables/Menu";
import Projets from "../../usables/Projets";
import Contact from "../../components/Contact";
import { ScrollSection } from "../../context/ScrollSectionContext";
import { Dynamic } from "../../context/ToDynamicContext";

const Home = () => {
  const { location, setSkillsSelect } = Dynamic();
  const { scrollSmooth } = ScrollSection();
  const scrolling = () => {
    if (location.pathname === "/") {
      return scrollSmooth("profil-composant");
    }
  };

  useEffect(() => {
    console.log(location);
    if (location.pathname === "/") {
      setSkillsSelect([]);
    }
  }, []);

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
