import React, { useState } from "react";
import { styled } from "styled-components";
import CalculatorResult from "./CalculatorResult";
import { calculateCompoundInterest } from "services/calculationService";
import DataVisualization from "./DataVisualization";
import DataBreakdown from "./DataBreakdown";
import Calculator from "./Calculator";

const CompoundInterestCalculatorStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  .calculator {
    grid-column: 1 / 2;
    background-color: white;
    border-radius: 12px;
    padding: 1rem;
  }
`;

const currencySymbols = {
  USD: "$",
  EUR: "€",
  CAD: "C$",
};

const CompoundInterestCalculator = () => {
  const [deposit, setDeposit] = useState("");
  const [yearlyReturn, setYearlyReturn] = useState(5);
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [period, setPeriod] = useState("");
  const [compoundingFrequency, setCompoundingFrequency] = useState("monthly");
  const [currency, setCurrency] = useState("USD");
  const [result, setResult] = useState(null);
  const [pieData, setPieData] = useState([]);
  const [lineData, setLineData] = useState([]);

  const handleFrequencyChange = (e) => setCompoundingFrequency(e.target.value);
  const handleCurrencyChange = (e) => setCurrency(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    const { total, pieData, lineData } = calculateCompoundInterest({
      deposit,
      yearlyReturn,
      monthlyContribution,
      period,
      compoundingFrequency,
    });
    setResult(total);
    setPieData(pieData);
    setLineData(lineData);
  };

  return (
    <CompoundInterestCalculatorStyle>
      <div className="calculator">
        <Calculator
          deposit={deposit}
          setDeposit={setDeposit}
          yearlyReturn={yearlyReturn}
          setYearlyReturn={setYearlyReturn}
          monthlyContribution={monthlyContribution}
          setMonthlyContribution={setMonthlyContribution}
          period={period}
          setPeriod={setPeriod}
          compoundingFrequency={compoundingFrequency}
          handleFrequencyChange={handleFrequencyChange}
          currency={currency}
          handleCurrencyChange={handleCurrencyChange}
          handleYearlyReturnChange={(e) =>
            setYearlyReturn(Math.min(Math.max(e.target.value, 1), 20))
          }
          onSubmit={onSubmit}
          currencySymbols={currencySymbols}
        />
        <CalculatorResult
          result={result}
          currency={currency}
          currencySymbols={currencySymbols}
        />
      </div>
      <DataVisualization pieData={pieData} lineData={lineData} />
      <DataBreakdown currency={currency} currencySymbols={currencySymbols} lineData={lineData} frequency={compoundingFrequency} />
    </CompoundInterestCalculatorStyle>
  );
};

export default CompoundInterestCalculator;
