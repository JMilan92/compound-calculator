import React from "react";
import { styled } from "styled-components";
import { getFrequencyLabel } from "utils/helper";

const ResultStyle = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  & > p {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  & .amount {
    font-weight: 600;
    font-size: 2rem;
  }

  & .breakdown {
    margin-top: 1rem;
    font-size: 1rem;
    color: #555;
  }

  & .label {
    font-weight: 600;
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
  const earnedInterest = result - monthlyContribution * period;

  return (
    <ResultStyle>
      <p>
        After {period} {frequencyLabel.toLowerCase()} your
      </p>

      <div className="breakdown">
        <p>
          <span className="label">Initial Investment:</span>{" "}
          {currencySymbols[currency]}
          {new Intl.NumberFormat().format(
            deposit + monthlyContribution * 12 * period
          )}
        </p>
        <p>
          <span className="label">Earned Interest:</span>{" "}
          {currencySymbols[currency]}
          {new Intl.NumberFormat().format(
            earnedInterest
          )}
        </p>
        <p>
          <span className="label">Total Amount:</span>{" "}
          {currencySymbols[currency]}
          {new Intl.NumberFormat().format(
            result
          )}
        </p>
      </div>
    </ResultStyle>
  );
};

export default CalculatorResult;
