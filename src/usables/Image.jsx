import React from "react";
import styled from "styled-components";

const Image = ({ img, legend }) => {
  return <StyledImage src={img} alt={legend} />;
};

export default Image;

const StyledImage = styled.img`
  display: block;
  width: 50%;
`;
