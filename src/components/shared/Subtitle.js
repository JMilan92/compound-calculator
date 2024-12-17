// Import dependencies
import React from "react";
import styled from "styled-components";

// Styled Link component with cursor pointer
const SubtitleStyled = styled.p`
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    background: var(--primary-color);
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: .5rem;
`;

const Subtitle = ({ subtitle }) => {
  return (
    <SubtitleStyled>
        {subtitle}
    </SubtitleStyled>
  );
};

export default Subtitle;
