import React, { useEffect, useRef } from "react";
import Profil from "../../components/Profil";
import Logo from "../../usables/Logo";
import Menu from "../../usables/Menu";
import Projets from "../../usables/Projets";
import Contact from "../../components/Contact";
import { ScrollSection } from "../../context/ScrollSectionContext";
import { Dynamic } from "../../context/ToDynamicContext";

const Home = () => {
  const { location, setSkillsSelect } = Dynamic();
  const { scrollSmooth, setScreenProfil, setScreenProjets, setScreenContact } =
    ScrollSection();
  const profilRef = useRef();
  const projetsRef = useRef();
  const contactRef = useRef();
  const scrolling = () => {
    if (location.pathname === "/") {
      return scrollSmooth("profil-composant");
    }
  };

  useEffect(() => {
    //console.log(location);
    if (location.pathname === "/") {
      setSkillsSelect([]);
    }

    const options = {
      root: null, // C'est la fenêtre par défaut
      rootMargin: "0px",
      threshold: 0.5, // Définissez le seuil en fonction de vos besoins
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // L'élément est maintenant visible à l'écran
          //to projets component
          if (entry.target === profilRef.current) {
            setScreenProfil(true);
            //console.log("L'élément est visible à l'écran");
          } else {
            setScreenProfil(false);
          }

          //to projets component
          if (entry.target === projetsRef.current) {
            setScreenProjets(true);
            //console.log("L'élément est visible à l'écran");
          } else {
            setScreenProjets(false);
          }

          //to contact component
          if (entry.target === contactRef.current) {
            setScreenContact(true);
            //console.log("L'élément est visible à l'écran");
          } else {
            setScreenContact(false);
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (profilRef.current) {
      observer.observe(profilRef.current);
    }
    if (projetsRef.current) {
      observer.observe(projetsRef.current);
    }
    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (profilRef.current) {
        observer.unobserve(profilRef.current);
      }
      if (projetsRef.current) {
        observer.unobserve(projetsRef.current);
      }
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <div>
      <Logo actionClick={() => scrolling()} />
      <Profil ref={profilRef} />
      <Projets ref={projetsRef} />
      <Contact ref={contactRef} />
      <Menu />
    </div>
  );
};

export default Home;
