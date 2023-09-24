import React from "react";

const TitleLittle = ({ text, actionClick }) => {
  return <div onClick={actionClick}>{text ? text : "Petit titre"}</div>;
};

export default TitleLittle;
