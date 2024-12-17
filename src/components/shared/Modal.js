import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Headline from "./Headline";
import Paragraph from "./Paragraph";

// Styled Modal Component
const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--modal-backdrop);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContainer = styled.div`
  background-color: var(--card-background);
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }
`;

const Modal = ({ onClose }) => {
  return (
    <ModalBackdrop>
      <ModalContainer>
      <Headline as="h2">This is a cool feature!</Headline>
        <Paragraph>It will be available soon!</Paragraph>
        <Button onClick={onClose} text="Close"></Button>
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default Modal;
