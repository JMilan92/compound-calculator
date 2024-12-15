import React from "react";

const CalculatorResult = ({ result, currency, currencySymbols }) => {
  if (result === null) return null;

  return (
    <div className="result">
      <h2>Result:</h2>
      <p>
        Total Amount: {currencySymbols[currency]}
        {result}
      </p>
    </div>
  );
};

export default CalculatorResult;
