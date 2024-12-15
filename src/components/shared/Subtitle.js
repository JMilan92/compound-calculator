// Import dependencies
import React from "react";
import styled from "styled-components";

// Styled Link component with cursor pointer
const SubtitleStyled = styled.p`
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    background: rgb(36,101,255);
    background: linear-gradient(90deg, rgba(36,101,255,1) 0%, rgba(4,60,133,1) 85%);
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
