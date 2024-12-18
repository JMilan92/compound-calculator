import React from "react";
import LogoLight from "assets/images/bank-logo-light.svg";
import LogoDark from "assets/images/bank-logo-dark.svg";

const Logo = ({ isDarkMode }) => {
  return (
    <img src={isDarkMode ? LogoDark : LogoLight} alt="Logo" />
  );
};

export default Logo;
