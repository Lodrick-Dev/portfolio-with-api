import React from "react";
import { styled } from "styled-components";
import FormContact from "./Forms/FormContact";

const Contact = () => {
  return (
    <StyledContact id="contact-composant">
      <FormContact />
    </StyledContact>
  );
};

export default Contact;

const StyledContact = styled.div`
  height: 100vh;
  background: url("./items/background2.jpg");
  background-position: center;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
