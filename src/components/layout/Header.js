import { styled } from "styled-components";
import React, { useState, useEffect } from "react";
import Logo from "components/shared/Logo"; 
import ThemeSwitcher from "components/layout/ThemeSwitcher";

const HeaderStyleComponent = styled.header`
  border-bottom: 1px solid var(--border-light);
  box-shadow: 10px 0 15px rgba(0,0,0,0.20);
  padding: 1rem;
  background: var(--background-color);
  display: flex;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1010;
`;

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check the theme preference on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.body.classList.add(savedTheme);
      setIsDarkMode(savedTheme === "dark");
    } else {
      document.body.classList.add("light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";

    // Update body class and theme logic
    document.body.classList.remove("light", "dark");
    document.body.classList.add(newTheme);

    // Save theme in localStorage
    localStorage.setItem("theme", newTheme);

    // Toggle theme state
    setIsDarkMode(!isDarkMode);
  };

  return (
    <HeaderStyleComponent>
      <Logo isDarkMode={isDarkMode} />
      <ThemeSwitcher isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </HeaderStyleComponent>
  );
};

export default Header;
