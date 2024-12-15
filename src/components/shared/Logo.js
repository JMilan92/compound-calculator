// Import dependencies
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// => Import assets
import LogoImage from "assets/images/bank-logo.svg";

// Styled Link component with cursor pointer
const LogoStyled = styled(Link)`
  width: 160px;
  height: 30px;
  display: inline-block;
  cursor: pointer; /* Add cursor pointer for clickable effect */
`;

const Logo = ({ ...props }) => {
  return (
    <LogoStyled to="/" {...props}>
      <img src={LogoImage} alt="Bank Wallet" />
    </LogoStyled>
  );
};

export default Logo;
