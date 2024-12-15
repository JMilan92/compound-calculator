import { styled } from "styled-components";

// => Import components
import Logo from "components/shared/Logo";

const HeaderStyleComponent = styled.header`

  border-bottom: 1px solid var(--border);
  box-shadow: 10px 0 15px rgba(0,0,0,0.20);
  padding: 1rem;
  background-color: var(--background-color);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1010;

`;
const Header = () => {
  return (
    <HeaderStyleComponent>
        <Logo />
    </HeaderStyleComponent>
  );
};

export default Header;
