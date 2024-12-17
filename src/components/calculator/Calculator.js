import React from "react";
import { styled } from "styled-components";
import { getFrequencyLabel } from "utils/helper";
import { Tooltip } from "react-tooltip";
import Button from "components/shared/Button";
import { ArrowUpRight } from 'lucide-react';

const CalculatorStyle = styled.div`
  .tooltip {
    font-size: 0.8rem;
    color: var(--label-color);
    cursor: pointer;
    width: 1rem;
    height: 1rem;
    line-height: 1rem;
    margin-left: 0.5rem;
    border-radius: 50%;
    border: 1px solid var(--border);
    display: inline-block;
    text-align: center;
  }

  .form-group {
    margin-bottom: 1.6rem;
    display: flex;
    flex-direction: column;

    &__label {
      color: var(--label-color);
      margin-bottom: 0.5rem;
    }

    &__select {
      padding: 0.5rem;
      border: 1px solid var(--border);
      border-radius: 4px;
    }

    &__radio {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
    }

    &__slider {
      width: 100%;
      padding: 0;
    }

    &__slider-value {
      width: 70px;
      text-align: center;
    }
  }
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid var(--border);
  border-radius: 4px;
  width: 100%;
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const RadioWrapper = styled.div`
  display: flex;
  gap: 0.875rem;
  flex-direction: column;
`;

const renderTooltip = (content) => (
  <span
    className="tooltip"
    data-tooltip-id="my-tooltip"
    data-tooltip-content={content}
    data-tooltip-place="top"
  >
    i
  </span>
);

const Calculator = ({
  deposit,
  setDeposit,
  yearlyReturn,
  setYearlyReturn,
  monthlyContribution,
  setMonthlyContribution,
  period,
  setPeriod,
  compoundingFrequency,
  handleFrequencyChange,
  currency,
  handleCurrencyChange,
  handleYearlyReturnChange,
  onSubmit,
  currencySymbols,
}) => {
  const frequencyLabel = getFrequencyLabel(compoundingFrequency);
  const selectedCurrencySymbol = currencySymbols[currency];

  return (
    <CalculatorStyle>
      <Tooltip id="my-tooltip" />

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label className="form-group__label" htmlFor="currency">
            Currency
            {renderTooltip("Select the currency you want to use for the calculations (e.g., USD, EUR, CAD).")}
          </label>
          <select
            className="form-group__select"
            id="currency"
            value={currency}
            onChange={handleCurrencyChange}
          >
            <option value="USD">USD - US Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="CAD">CAD - Canadian Dollar</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-group__label" htmlFor="deposit">
            Initial Deposit ({selectedCurrencySymbol})
            {renderTooltip("Enter the amount you plan to deposit at the start of the investment. This serves as your starting balance.")}
          </label>
          <Input
            type="number"
            id="deposit"
            value={deposit}
            onChange={(e) => setDeposit(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-group__label" htmlFor="yearlyReturn">
            Yearly Return Rate (%)
            {renderTooltip("Specify the annual rate of return you expect from your investment. Typically expressed as a percentage.")}
          </label>
          <SliderContainer>
            <Input
              className="form-group__slider"
              type="range"
              id="yearlyReturn"
              min="1"
              max="20"
              step="0.1"
              value={yearlyReturn}
              onChange={(e) => setYearlyReturn(e.target.value)}
              aria-label="Yearly return rate"
            />
            <Input
              className="form-group__slider-value"
              type="number"
              min="1"
              max="20"
              step="0.1"
              value={yearlyReturn}
              onChange={handleYearlyReturnChange}
            />
          </SliderContainer>
        </div>

        <div className="form-group">
          <label className="form-group__label" htmlFor="monthlyContribution">
            Monthly Contribution ({selectedCurrencySymbol})
            {renderTooltip("Input the amount you plan to contribute to your investment each month.")}
          </label>
          <Input
            type="number"
            id="monthlyContribution"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-group__label" htmlFor="period">
            Period ({frequencyLabel})
            {renderTooltip("Indicate the total duration of your investment. You can specify the period in years, quarters, or months based on your preference.")}
          </label>
          <Input
            type="number"
            id="period"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-group__label">
            Compounding Frequency:
            {renderTooltip("Select how often the interest will be calculated and added to your investment.")}
          </label>
          <RadioWrapper>
            <label className="form-group__radio">
              <input
                type="radio"
                value="monthly"
                checked={compoundingFrequency === "monthly"}
                onChange={handleFrequencyChange}
                aria-label="Monthly compounding frequency"
              />
              Monthly
            </label>
            <label className="form-group__radio">
              <input
                type="radio"
                value="quarterly"
                checked={compoundingFrequency === "quarterly"}
                onChange={handleFrequencyChange}
                aria-label="Quarterly compounding frequency"
              />
              Quarterly
            </label>
            <label className="form-group__radio">
              <input
                type="radio"
                value="annually"
                checked={compoundingFrequency === "annually"}
                onChange={handleFrequencyChange}
                aria-label="Annually compounding frequency"
              />
              Annually
            </label>
          </RadioWrapper>
        </div>

        <Button text="Calculate" type="submit" icon={ArrowUpRight} disabled={!deposit || !monthlyContribution || !period} />
      </form>
    </CalculatorStyle>
  );
};

export default Calculator;
