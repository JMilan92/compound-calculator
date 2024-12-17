import React from "react";
import { styled } from "styled-components";
import { getFrequencyLabel } from "utils/helper";
import { Tooltip } from "react-tooltip";

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

    &__input {
      padding: 0.5rem;
      border: 1px solid var(--border);
      border-radius: 4px;
    }

    &__label {
      color: var(--label-color);
      margin-bottom: 0.5rem;
    }

    &__select {
      padding: 0.5rem;
      border: 1px solid var(--border);
      border-radius: 4px;
    }

    &__radio-wrapp {
      display: flex;
      gap: 0.875rem;
      flex-direction: column;
    }

    &__radio {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
    }

    &__slider-container {
      display: flex;
      align-items: center;
      gap: 1rem;

      input[type="number"] {
        width: 70px;
        padding: 0.5rem;
        border: 1px solid var(--border);
        border-radius: 4px;
        text-align: center;
      }
    }

    &__slider {
      width: 100%;
    }
  }
`;

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

  return (
    <CalculatorStyle>

      <Tooltip id="my-tooltip" />

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label className="form-group__label" htmlFor="currency">
            Currency
            <span
              className="tooltip"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Select the currency you want to use for the calculations (e.g., USD, EUR, CAD)."
              data-tooltip-place="top"
            >
              i
            </span>
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
            Initial Deposit ({currencySymbols[currency]})
            <span
              className="tooltip"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Enter the amount you plan to deposit at the start of the investment. This serves as your starting balance."
              data-tooltip-place="top"
            >
              i
            </span>
          </label>
          <input
            className="form-group__input"
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
            <span
              className="tooltip"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Specify the annual rate of return you expect from your investment. Typically expressed as a percentage."
              data-tooltip-place="top"
            >
              i
            </span>
          </label>
          <div className="form-group__slider-container">
            <input
              className="form-group__slider"
              type="range"
              id="yearlyReturn"
              min="1"
              max="20"
              step="0.1"
              value={yearlyReturn}
              onChange={(e) => setYearlyReturn(e.target.value)}
            />
            <input
              type="number"
              min="1"
              max="20"
              step="0.1"
              value={yearlyReturn}
              onChange={handleYearlyReturnChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-group__label" htmlFor="monthlyContribution">
            Monthly Contribution ({currencySymbols[currency]})
            <span
              className="tooltip"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Input the amount you plan to contribute to your investment each month."
              data-tooltip-place="top"
            >
              i
            </span>
          </label>
          <input
            className="form-group__input"
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
            <span
              className="tooltip"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Indicate the total duration of your investment. You can specify the period in years, quarters, or months based on your preference."
              data-tooltip-place="top"
            >
              i
            </span>
          </label>
          <input
            className="form-group__input"
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
            <span
              className="tooltip"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Select how often the interest will be calculated and added to your investment. Options include monthly, quarterly, or annually. A higher frequency results in more frequent compounding of returns."
              data-tooltip-place="top"
            >
              i
            </span>
          </label>
          <div className="form-group__radio-wrapp">
            <label className="form-group__radio">
              <input
                type="radio"
                value="monthly"
                checked={compoundingFrequency === "monthly"}
                onChange={handleFrequencyChange}
              />
              Monthly
            </label>
            <label className="form-group__radio">
              <input
                type="radio"
                value="quarterly"
                checked={compoundingFrequency === "quarterly"}
                onChange={handleFrequencyChange}
              />
              Quarterly
            </label>
            <label className="form-group__radio">
              <input
                type="radio"
                value="annually"
                checked={compoundingFrequency === "annually"}
                onChange={handleFrequencyChange}
              />
              Annually
            </label>
          </div>
        </div>


        <button className="btn" type="submit">
          <span>Calculate</span>
        </button>
      </form>
    </CalculatorStyle>
  );
};

export default Calculator;
