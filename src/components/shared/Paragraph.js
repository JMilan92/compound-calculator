import React from 'react';
import styled from 'styled-components';

// Create a styled <p> tag
const StyledParagraph = styled.p`
    font-size: 1rem;
    margin-bottom: 2rem;
`;

// Create the Paragraph component
const Paragraph = ({ children, className, style, ...props }) => {
  return (
    <StyledParagraph className={className} style={style} {...props}>
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
