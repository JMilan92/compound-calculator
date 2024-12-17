import React, { useState } from "react";
import { styled } from "styled-components";
import CalculatorResult from "./CalculatorResult";
import { calculateCompoundInterest } from "services/calculationService";
import DataVisualization from "./DataVisualization";
import DataBreakdown from "./DataBreakdown";
import Calculator from "./Calculator";
import Button from "components/shared/Button";
import { CloudDownload } from 'lucide-react';
import Modal from "components/shared/Modal";

const CompoundInterestCalculatorStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  align-items: start;

  .calculator {
    grid-column: 1 / 2;
    background-color: var(--card-background);
    border: 1px solid var(--border-light);
    border-radius: 12px;
    padding: 2rem;
    position: sticky;
    top: 6rem;
  }

  .result {
    grid-column: 2 / 4;

    background-color: var(--card-background);
    border: 1px solid var(--border-light);
    border-radius: 12px;
    padding: 2rem;

    min-height: 680px;

    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }

  @media (max-width: 992px) {
    display: block;

    .calculator {
      margin-bottom: 2rem;
      position: static;
    }
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
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

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

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);

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
      </div>
      <div className="result">
        <CalculatorResult
          period={period}
          frequency={compoundingFrequency}
          result={result}
          currency={currency}
          currencySymbols={currencySymbols}
          monthlyContribution={monthlyContribution}
          deposit={deposit}
        />
        <DataVisualization pieData={pieData} lineData={lineData} />
        <DataBreakdown
          currency={currency}
          currencySymbols={currencySymbols}
          lineData={lineData}
          frequency={compoundingFrequency}
        />
        
        {lineData && lineData.length > 0 && (
          <Button
            text="Download Report"
            type="submit"
            icon={CloudDownload}
            onClick={openModal} 
          />
        )}
      </div>

      {/* Render the Modal if it's open */}
      {isModalOpen && <Modal onClose={closeModal} />}
    </CompoundInterestCalculatorStyle>
  );
};

export default CompoundInterestCalculator;
