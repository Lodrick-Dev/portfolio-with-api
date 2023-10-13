import { createContext, useContext, useState } from "react";

const ScrollSectionContext = createContext();

export const ScrollSectionContextProvider = ({ children }) => {
  // const location = useLocation();
  // const navigue = useNavigate();
  const [menuActif, setMenuActif] = useState("profil-composant");
  const [screenProfil, setScreenProfil] = useState(false);
  const [screenProjets, setScreenProjets] = useState(false);
  const [screenContact, setScreenContact] = useState(false);
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
      value={{
        scrollSmooth,
        menuActif,
        screenContact,
        setScreenContact,
        screenProjets,
        setScreenProjets,
        screenProfil,
        setScreenProfil,
      }}
    >
      {children}
    </ScrollSectionContext.Provider>
  );
};
export const ScrollSection = () => {
  return useContext(ScrollSectionContext);
};
