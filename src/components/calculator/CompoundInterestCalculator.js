import { styled } from "styled-components";
import Calculator from "./Calculator";
import DataVizualization from "./DataVisualization";
import DataBreakdown from "./DataBreakdown";

const CompoundInterestCalculatorStyle = styled.div`
    display: grid;
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
