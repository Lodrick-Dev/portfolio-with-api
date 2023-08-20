import React from "react";
import {
  MdOutlineDescription,
  MdOutlineLocationOn,
  MdOutlinePermIdentity,
} from "react-icons/md";
import { styled } from "styled-components";
import { ScrollSection } from "../context/ScrollSectionContext";

const Description = ({ dataProfil }) => {
  // console.log(dataProfil);
  const { location } = ScrollSection();
  return (
    //le $ devant location car StyledComponent veut le renvoyé dans le dom
    <StyledDescription $location={location.pathname}>
      <strong>
        {" "}
        <MdOutlinePermIdentity /> {dataProfil.pseudo}
      </strong>
      <span>
        {" "}
        <MdOutlineLocationOn /> {dataProfil.localisation}{" "}
      </span>
      <p>
        {" "}
        <MdOutlineDescription /> {dataProfil.description}
      </p>
    </StyledDescription>
  );
};

export default Description;

const StyledDescription = styled.div`
  background: pink;

  strong,
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    /* font-size: 1.5em; */
    font-size: ${({ $location }) =>
      $location === "/admin" ? "1.1em" : "1.5em"};
  }
  p {
    margin-top: 10px;
    /* font-size: 1.3em; */
    font-size: ${({ $location }) =>
      $location === "/admin" ? "0.9em" : "1.3em"};
  }
`;
