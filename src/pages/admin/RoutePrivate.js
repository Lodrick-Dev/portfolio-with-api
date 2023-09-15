import React from "react";
import { Navigate } from "react-router-dom";
import { Dynamic } from "../../context/ToDynamicContext";

const RoutePrivate = ({ children }) => {
  const { idUser } = Dynamic();
  if (!idUser) {
    return <Navigate to="/" />;
  }
  return children;
};

export default RoutePrivate;
