import React, { useEffect } from "react";
import Logo from "../../usables/Logo";
import SectionPost from "../../components/adminComponents/SectionPost";
import SectionSKills from "../../components/adminComponents/SectionSKills";
import SectionProfil from "../../components/adminComponents/SectionProfil";
import { Dynamic } from "../../context/ToDynamicContext";
import SectionPassword from "../../components/adminComponents/SectionPassword";

const Admin = () => {
  const { location, navigue } = Dynamic();
  const goIndex = () => {
    if (location.pathname === "/admin") return navigue("/");
  };

  return (
    <>
      <Logo actionClick={() => goIndex()} />
      <SectionPost />
      <SectionSKills />
      <SectionProfil />
      <SectionPassword />
    </>
  );
};

export default Admin;
