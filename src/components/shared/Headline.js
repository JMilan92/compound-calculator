// Import dependencies
import React from "react";
import styled from "styled-components";

// Styled component with dynamic tag
const HeadlineStyled = styled.h1`
  font-size: ${({ as }) =>
    as === "h1" ? "2.5rem" :
    as === "h2" ? "2rem" :
    as === "h3" ? "1.75rem" :
    as === "h4" ? "1.5rem" :
    as === "h5" ? "1.25rem" : "1rem"};
  color: black;
  margin-bottom: 3rem;
`;

// Headline component
const Headline = ({ as = "h1", children }) => {
  return <HeadlineStyled as={as}>{children}</HeadlineStyled>;
};

export default Headline;
