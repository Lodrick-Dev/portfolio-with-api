import React, { useEffect } from "react";
import Logo from "../../usables/Logo";
import SectionPost from "../../components/adminComponents/SectionPost";
import SectionSKills from "../../components/adminComponents/SectionSKills";
import SectionProfil from "../../components/adminComponents/SectionProfil";
import { ScrollSection } from "../../context/ScrollSectionContext";

const Admin = () => {
  const { location } = ScrollSection();
  const { navigue } = ScrollSection();
  const goIndex = () => {
    if (location.pathname === "/admin") return navigue("/");
  };

  return (
    <>
      <Logo actionClick={() => goIndex()} />
      <SectionPost />
      <SectionSKills />
      <SectionProfil />
    </>
  );
};

export default Admin;
