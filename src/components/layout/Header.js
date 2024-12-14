import { styled } from "styled-components";

const HeaderStyleComponent = styled.header`
    background: red;
`;
const Header = () => {
  return (
    <HeaderStyleComponent>
        <h1>My Header</h1>
    </HeaderStyleComponent>
  );
};

export default Header;
