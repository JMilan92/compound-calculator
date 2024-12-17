import { styled } from "styled-components";

// => Import components
import CompoundInterestCalculator from "components/calculator/CompoundInterestCalculator";
import Subtitle from "components/shared/Subtitle";
import Headline from "components/shared/Headline";


const MainStyle = styled.main`
  background: var(--background-color);
  padding-top: 4rem;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem;
  }
`;
const Main = () => {
  return (
    <MainStyle>
      <div className="container">
        <Subtitle subtitle="Compound Interest Calculator" />
        <Headline as="h1">Let's estimate your invesment growth</Headline>
        <CompoundInterestCalculator />
      </div>
    </MainStyle>
  );
};

export default Main;
