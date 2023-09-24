import React from "react";
import styled from "styled-components";

const BoxNavDeconnect = () => {
  return (
    <StyledBoxNavDeconnect onClick={(e) => e.stopPropagation()}>
      BoxNavDeconnect
    </StyledBoxNavDeconnect>
  );
};

export default BoxNavDeconnect;

const StyledBoxNavDeconnect = styled.div`
  background: blue;
  height: 10vh;
`;
