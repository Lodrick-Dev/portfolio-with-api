import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ScrollSectionContext = createContext();

export const ScrollSectionContextProvider = ({ children }) => {
  const location = useLocation();
  const navigue = useNavigate();
  const [menuActif, setMenuActif] = useState("profil-composant");
  const scrollSmooth = (idComposant) => {
    setMenuActif(idComposant);
    const id = document.getElementById(idComposant);
    if (id) {
      //   return console.log(id);
      id.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollSectionContext.Provider
      value={{ scrollSmooth, location, navigue, menuActif }}
    >
      {children}
    </ScrollSectionContext.Provider>
  );
};
export const ScrollSection = () => {
  return useContext(ScrollSectionContext);
};
