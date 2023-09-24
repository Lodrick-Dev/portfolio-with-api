import React from "react";

const TitleMedium = ({ text, actionClick }) => {
  return <h2 onClick={actionClick}>{text ? text : "Aucun medium titre"}</h2>;
};

export default TitleMedium;
