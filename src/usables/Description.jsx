import React from "react";
import {
  MdOutlineDescription,
  MdOutlineLocationOn,
  MdOutlinePermIdentity,
} from "react-icons/md";
import { styled } from "styled-components";
import { Dynamic } from "../context/ToDynamicContext";

const Description = ({ dataProfil }) => {
  const { location } = Dynamic();
  return (
    //le $ devant location car StyledComponent veut le renvoyé dans le dom
    <StyledDescription $location={location.pathname}>
      <strong>
        <MdOutlinePermIdentity className="i-in-descrip" /> {dataProfil.pseudo}
      </strong>
      <span>
        {" "}
        <MdOutlineLocationOn className="i-in-descrip" />{" "}
        {dataProfil.localisation}{" "}
      </span>
      <p>
        {" "}
        <MdOutlineDescription className="i-in-descrip" />{" "}
        {dataProfil.description}
      </p>
    </StyledDescription>
  );
};

export default Description;

const StyledDescription = styled.div`
  /* background: pink; */

  strong,
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    /* color: #06ce8d; */
    color: #cacaca;
    margin-top: 10px;
    /* font-size: 1.5em; */
    font-size: ${({ $location }) =>
      $location === "/admin" ? "1.1em" : "1.5em"};
  }
  p {
    color: #cacaca;
    margin-top: 10px;
    /* font-size: 1.3em; */
    font-size: ${({ $location }) =>
      $location === "/admin" ? "0.9em" : "1.3em"};
  }
  .i-in-descrip {
    margin-right: 10px;
    color: yellow;
  }
`;
