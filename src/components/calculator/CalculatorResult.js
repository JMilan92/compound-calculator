import React from "react";
import { styled } from "styled-components";
import { getFrequencyLabel } from "utils/helper";

const ResultStyle = styled.div`

    text-align: center;
    margin-bottom: 2rem;

    & > p {
        margin-bottom: .5rem;
        font-size: 1.2rem;
    }

    & .amount {
        font-weight: 600;
        font-size: 2rem;
    }
`;

const CalculatorResult = ({
  result,
  currency,
  currencySymbols,
  period,
  frequency,
}) => {
  const frequencyLabel = getFrequencyLabel(frequency, period);

  if (result === null) return null;

  return (
    <ResultStyle>
      <p>
        After {period} {frequencyLabel.toLowerCase()}, your balance would be
      </p>
      <p className="amount">
        {currencySymbols[currency]}
        {result}
      </p>
    </ResultStyle>
  );
};

export default CalculatorResult;
