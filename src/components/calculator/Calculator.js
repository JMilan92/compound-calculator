import React from "react";
import { styled } from "styled-components";

const CalculatorStyle = styled.div`
  .form-group {
    margin: 1rem;
    display: flex;
    flex-direction: column;

    &__input {
      margin-bottom: 0.875rem;
      padding: 0.5rem;
      border: 1px solid var(--border);
      border-radius: 4px;
    }

    &__label {
      color: gray;
      margin-bottom: 0.5rem;
    }

    &__select {
      margin-top: 0.5rem;
      padding: 0.5rem;
      border: 1px solid var(--border);
      border-radius: 4px;
    }

    &__slider-container {
      display: flex;
      align-items: center;
      gap: 1rem;

      input[type="number"] {
        width: 80px;
        padding: 0.5rem;
        border: 1px solid var(--border);
        border-radius: 4px;
        text-align: right;
      }
    }
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
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
            Period (Years)
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
          <label>Compounding Frequency:</label>
          <div>
            <label>
              <input
                type="radio"
                value="annually"
                checked={compoundingFrequency === "annually"}
                onChange={handleFrequencyChange}
              />
              Annually
            </label>
            <label>
              <input
                type="radio"
                value="quarterly"
                checked={compoundingFrequency === "quarterly"}
                onChange={handleFrequencyChange}
              />
              Quarterly
            </label>
            <label>
              <input
                type="radio"
                value="monthly"
                checked={compoundingFrequency === "monthly"}
                onChange={handleFrequencyChange}
              />
              Monthly
            </label>
          </div>
        </div>

        <button type="submit">Calculate</button>
      </form>
    </CalculatorStyle>
  );
};

export default Calculator;
