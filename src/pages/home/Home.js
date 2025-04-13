import React, { useEffect, useRef } from "react";
import Profil from "../../components/Profil";
import Logo from "../../usables/Logo";
import Menu from "../../usables/Menu";
import Projets from "../../usables/Projets";
import Contact from "../../components/Contact";
import { ScrollSection } from "../../context/ScrollSectionContext";
import { Dynamic } from "../../context/ToDynamicContext";
import styled from "styled-components";
import { COLORS } from "../../usables/COLORS";
import Skills from "../../usables/Skills";

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
    <StyledHome>
      <Logo actionClick={() => scrolling()} />
      <Profil ref={profilRef} />
      <div className="skill-projets">
        <div className="cards">
          <span className="skill-span">🧪 Compétences</span>
          {location.pathname !== "/admin" && <Skills />}
        </div>
        <div className="cards">
          <Projets ref={projetsRef} />
        </div>
      </div>
      <Contact ref={contactRef} />
      {/* <Menu /> */}
    </StyledHome>
  );
};

export default Home;
const StyledHome = styled.div`
  background: ${COLORS.background};
  .skill-projets {
    display: grid;
    gap: 2rem;
    max-width: 960px;
    margin: 0 auto 30px;
    padding: 0 1rem;
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    .cards {
      .skill-span {
        color: white;
      }
      background: #2a2b31;
      border-radius: 20px;
      margin: 0px 15px;
      padding: 2rem;
      box-shadow: 8px 8px 20px #18191f, -8px -8px 20px #34353f;
      border: 1px solid rgba(255, 255, 255, 0.05);
      height: 70vh;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    @media screen and (max-width: 445px) {
      .cards {
        height: 50vh;
      }
    }
  }
`;
