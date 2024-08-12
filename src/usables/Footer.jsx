import React from "react";
import { styled } from "styled-components";
import { ImGithub } from "react-icons/im";
import TitleMedium from "./TitleMedium";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const nav = useNavigate();
  return (
    <StyledFooter>
      <TitleMedium text={"Lodrick Undefined"} actionClick={() => nav("/")} />
      <a href="https://github.com/Lodrick-Dev" target="_blank">
        Github <ImGithub />{" "}
      </a>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  height: 20vh;
  background: #2e2c2c;
  color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  a {
    margin: 10px;
    display: block;
    cursor: pointer;
    color: #06ce8d;
  }
  //428px iphone 13 pro max
  @media screen and (max-width: 428px) {
    height: 30vh;
    justify-content: flex-start;
    flex-direction: column;
  }
`;
