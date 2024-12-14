import { styled } from "styled-components";
import React, { useState } from "react";

const CalculatorStyle = styled.div`
  grid-column: 1 / 2;
  background-color: white;
  border-radius: 12px;
  padding: 1rem;

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

  .result {
    margin-top: 1rem;
    h2 {
      margin-bottom: 0.5rem;
    }
  }
`;

const currencySymbols = {
  USD: "$",
  EUR: "€",
  CAD: "C$",
};

const Calculator = () => {
  const [deposit, setDeposit] = useState("");
  const [yearlyReturn, setYearlyReturn] = useState(5); // Default slider value
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [period, setPeriod] = useState("");
  const [compoundingFrequency, setCompoundingFrequency] = useState("monthly");
  const [currency, setCurrency] = useState("USD");
  const [result, setResult] = useState(null);

  const handleFrequencyChange = (e) => {
    setCompoundingFrequency(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleYearlyReturnChange = (e) => {
    const value = Math.min(Math.max(e.target.value, 1), 20); // Keep value between 1 and 20
    setYearlyReturn(value);
  };

  const calculateCompoundInterest = (e) => {
    e.preventDefault();

    const P = parseFloat(deposit);
    const r = parseFloat(yearlyReturn) / 100;
    const C = parseFloat(monthlyContribution);
    const t = parseInt(period);

    let n;
    switch (compoundingFrequency) {
      case "annually":
        n = 1;
        break;
      case "quarterly":
        n = 4;
        break;
      case "monthly":
        n = 12;
        break;
      default:
        n = 12;
    }

    const A =
      P * Math.pow(1 + r / n, n * t) +
      C * ((Math.pow(1 + r / n, n * t) - 1) / (r / n));

    setResult(A.toFixed(2));
  };

  return (
    <CalculatorStyle>
      <form onSubmit={calculateCompoundInterest}>
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

      {result !== null && (
        <div className="result">
          <h2>Result:</h2>
          <p>
            Total Amount: {currencySymbols[currency]}
            {result}
          </p>
        </div>
      )}
    </CalculatorStyle>
  );
};

export default Calculator;
