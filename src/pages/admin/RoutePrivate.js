import React from "react";
import { Navigate } from "react-router-dom";

const RoutePrivate = ({ children }) => {
  const idUser = "";
  if (!idUser) {
    return <Navigate to="/" />;
  }
  return children;
};

export default RoutePrivate;
