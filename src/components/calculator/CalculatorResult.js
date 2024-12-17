import Headline from "components/shared/Headline";
import MetricNumber from "components/shared/MetricNumber";
import React from "react";
import { styled } from "styled-components";
import { getFrequencyLabel } from "utils/helper";

const ResultStyle = styled.div`
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 3rem;

  h2 {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }

  & .metric-wrapp {
    margin-top: 1rem;
    font-size: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 2rem;
    justify-content: center;
  }
`;

const CalculatorResult = ({
  result,
  currency,
  currencySymbols,
  period,
  frequency,
  monthlyContribution,
  deposit,
}) => {
  const frequencyLabel = getFrequencyLabel(frequency, period);

  if (result === null) return null;

  // Calculate interest earned
  // Adjust contributions based on compounding frequency
  if (frequency === "annually") {
    monthlyContribution = monthlyContribution * 12; // Convert monthly contribution to annual
  } else if (frequency === "quarterly") {
    monthlyContribution = monthlyContribution * 3; // Convert monthly contribution to quarterly
  }

  const earnedInterest = result - (Number(deposit) + Number(monthlyContribution) * Number(period));

  return (
    <ResultStyle>
      <Headline as="h2">
        After {period} {frequencyLabel.toLowerCase()} your
      </Headline>

      <div className="metric-wrapp">
        <MetricNumber
          label="Total Investment:"
          number={Number(deposit) + Number(monthlyContribution) * Number(period)}
          currencySymbol={currencySymbols[currency]}
        />

        <MetricNumber
          label="Earned Interest:"
          number={earnedInterest}
          customClass="earned"
          currencySymbol={currencySymbols[currency]}
        />

        <MetricNumber
          label="Total Amount"
          number={result}
          customClass="total"
          currencySymbol={currencySymbols[currency]}
        />
      </div>
    </ResultStyle>
  );
};

export default CalculatorResult;
