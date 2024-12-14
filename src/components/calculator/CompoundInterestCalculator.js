import { styled } from "styled-components";
import Calculator from "./Calculator";
import DataVizualization from "./DataVisualization";
import DataBreakdown from "./DataBreakdown";

const CompoundInterestCalculatorStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
`;
const CompoundInterestCalculator = () => {
  return (
    <CompoundInterestCalculatorStyle>

        <Calculator />
        <DataVizualization />
        <DataBreakdown />
        
    </CompoundInterestCalculatorStyle>
  );
};

export default CompoundInterestCalculator;
