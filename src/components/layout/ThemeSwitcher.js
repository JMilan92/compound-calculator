import React from "react";
import { Moon, Sun } from "lucide-react";  // Import the icons
import styled from "styled-components";    // Import styled-components

// Styled button for the theme switcher
const ToggleButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 4px 8px;
  cursor: pointer;
  color: var(--text-color);

  & > span {
    content: "";
    position: absolute;
    top: 3px;
    display: block;
    left: 5px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: var(--text-color);
    transition: transform 0.3s ease;
    z-index: -1;
  }

  &.dark > span {
    transform: translateX(28px);
  }
  
  .sun, .moon {
    width: 16px;
    height: 16px;
    transition: color 0.3s ease;
  }

  .sun--dark {
    color: var(--sun-dark); 
  }

  .sun--light { 
    color: var(--sun-light);
  }

  .moon--dark {
    color: var(--sun-dark);
  }

  .moon--light {
    color: var(--sun-light);
  }
`;

// ThemeSwitcher component
const ThemeSwitcher = ({ isDarkMode, toggleTheme }) => {
  return (
    <ToggleButton onClick={toggleTheme} className={isDarkMode ? "dark" : ""} aria-label="Toggle Theme">
      <span></span>
      <Sun className={`sun ${isDarkMode ? "sun--light" : "sun--dark"}`} />
      <Moon className={`moon ${isDarkMode ? "moon--dark" : "moon--light"}`} />
    </ToggleButton>
  );
};

export default ThemeSwitcher;
