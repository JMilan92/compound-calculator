import React from 'react';
import styled from 'styled-components';

// Create the Styled Button
const StyledButton = styled.button`

    display: block;
    width: 100%;
    padding: 0.5rem 1rem;
    line-height: 20px;
    color: var(--button-text-color);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background: var(--gradient-primary);
    background-size: 200% 200%;
    background-position: left center;
    transition: background-position 0.3s ease, box-shadow 0.3s ease;
    position: relative;

    &:hover {
      background-position: right center;
      box-shadow: 0px 4px 15px rgba(26, 115, 232, 0.6);
    }

  & > span {
    position: relative;
    display: inline-block;
  }

  svg {
    position: absolute;
    right: -24px;
    top: 100%;
    transform: translateY(10px);
    width: 20px;
    height: 20px;
    opacity: 0; 
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  &:hover svg {
    opacity: 1; 
    transform: translateY(-20px); 
  }
`;

// Button Component
const Button = ({ text, icon: Icon, cta, onClick, disabled, ...props }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} {...props}>
        <span>
            {text}
            {Icon && <Icon className="icon" />} {/* Render the icon if provided */}
        </span>

    </StyledButton>
  );
};

export default Button;
