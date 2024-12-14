import { styled } from "styled-components";
import React, { useState } from "react";

const CalculatorStyle = styled.div``;
const Calculator = () => {
  // State for the form inputs
  const [deposit, setDeposit] = useState("");
  const [yearlyReturn, setYearlyReturn] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [period, setPeriod] = useState("");
  const [compoundingFrequency, setCompoundingFrequency] = useState("monthly");
  const [result, setResult] = useState(null);

  // Handle radio button change
  const handleFrequencyChange = (e) => {
    setCompoundingFrequency(e.target.value);
  };

  // Calculate Compound Interest
  const calculateCompoundInterest = (e) => {
    e.preventDefault();

    // Parse input values
    const P = parseFloat(deposit);
    const r = parseFloat(yearlyReturn) / 100; // Convert to decimal
    const C = parseFloat(monthlyContribution);
    const t = parseInt(period);

    // Define the compounding periods based on the frequency selected
    let n; // Compounding periods per year
    switch (compoundingFrequency) {
      case "annually":
        n = 1; // Compounded annually
        break;
      case "monthly":
        n = 12; // Compounded monthly
        break;
      case "quarterly":
        n = 4; // Compounded quarterly
        break;
      default:
        n = 12; // Default to monthly if no valid selection
    }

    // Compound interest formula for total amount
    const A =
      P * Math.pow(1 + r / n, n * t) +
      C * ((Math.pow(1 + r / n, n * t) - 1) / (r / n));

    setResult(A.toFixed(2)); // Set the result with 2 decimal precision
  };

  return (
    <CalculatorStyle>
      <form onSubmit={calculateCompoundInterest}>
        <div>
          <label htmlFor="deposit">Initial Deposit</label>
          <input
            type="number"
            id="deposit"
            value={deposit}
            onChange={(e) => setDeposit(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="yearlyReturn">Yearly Return Rate (%)</label>
          <input
            type="number"
            id="yearlyReturn"
            value={yearlyReturn}
            onChange={(e) => setYearlyReturn(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="monthlyContribution">Monthly Contribution</label>
          <input
            type="number"
            id="monthlyContribution"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="period">Period (Years)</label>
          <input
            type="number"
            id="period"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            required
          />
        </div>

        {/* Radio buttons for compounding frequency */}
        <div>
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
        <div>
          <h2>Result:</h2>
          <p>Total Amount: ${result}</p>
        </div>
      )}
    </CalculatorStyle>
  );
};

export default Calculator;
