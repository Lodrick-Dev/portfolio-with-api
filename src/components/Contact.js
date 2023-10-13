import React, { forwardRef } from "react";
import { styled } from "styled-components";
import FormContact from "./Forms/FormContact";

const Contact = (props, ref) => {
  return (
    <StyledContact id="contact-composant" ref={ref}>
      <FormContact />
    </StyledContact>
  );
};

//props, ref et forwardRef pour qu'on puisse définir un useRef depuis là
//où le composant (Contact) est appelé, ici dans component Home.
export default forwardRef(Contact);

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
