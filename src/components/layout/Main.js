import { styled } from "styled-components";

// => Import components
import CompoundInterestCalculator from "components/calculator/CompoundInterestCalculator";


const MainStyle = styled.main`
  background-color: var(--background-color);
  height: 100%;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
`;
const Main = () => {
  return (
    <MainStyle>
      <div className="container">
        <p>Compound Interest Calculator</p>
        <h1>Let's estimate your invesment growth</h1>
        <CompoundInterestCalculator />
      </div>
    </MainStyle>
  );
};

export default Main;
