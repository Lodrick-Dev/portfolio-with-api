import React from "react";
import styled from "styled-components";

const Image = ({ img, legend }) => {
  return <StyledImage src={img} alt={legend} />;
};

export default Image;

const StyledImage = styled.img`
  display: block;
  width: 30%;
  //responsive
  //884px = 768px
  @media screen and (max-width: 884px) {
    width: 60%;
    border-radius: 10px;
    box-shadow: 3px 17px 19px -3px rgba(0, 0, 0, 0.45);
  }
  //428px iphone 13 pro max
  @media screen and (max-width: 428px) {
    width: 80%;
  }
`;
