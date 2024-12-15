import React from "react";
import { styled } from "styled-components";
import { getFrequencyLabel } from "utils/helper";

const CalculatorStyle = styled.div`
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
      gap: .875rem;
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
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label className="form-group__label" htmlFor="currency">
            Currency
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
          <label className="form-group__label">Compounding Frequency:</label>
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

        <button className="btn" type="submit">Calculate</button>
      </form>
    </CalculatorStyle>
  );
};

export default Calculator;
