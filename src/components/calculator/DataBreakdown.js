import Headline from "components/shared/Headline";
import React from "react";
import { styled } from "styled-components";
import { getFrequencyLabel } from "utils/helper";

const DataBreakdownStyle = styled.div`
  h2 {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1.2rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    border: 1px solid #ccc;
    padding: 0.75rem;
    text-align: center;
  }

  th {
    background-color: #f4f4f4;
    font-weight: bold;
  }

  td {
    color: #333;
  }
`;

const DataBreakdown = ({ lineData, frequency, currency, currencySymbols }) => {
  const frequencyLabel = getFrequencyLabel(frequency);
  if (!lineData || lineData.length !== 0) {
    return (
      <DataBreakdownStyle>
        <Headline as="h2">Investment Breakdown</Headline>
        <p>Detailed breakdown of your investment showing the monthly contributions, interest earned, and the total balance for each month.</p>
        <table>
          <thead>
            <tr>
              <th>{frequencyLabel}</th>
              <th>Invested</th>
              <th>Interest Earned</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {lineData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.label}</td>
                <td>
                  {currencySymbols[currency]}
                  {new Intl.NumberFormat().format(entry.invested.toFixed(2))}
                </td>
                <td>
                  {currencySymbols[currency]}
                  {new Intl.NumberFormat().format(entry.interest.toFixed(2))}
                </td>
                <td>
                  {currencySymbols[currency]} 
                  {new Intl.NumberFormat().format(entry.total.toFixed(2))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </DataBreakdownStyle>
    );
  }
};

export default DataBreakdown;
