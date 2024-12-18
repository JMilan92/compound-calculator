import Headline from "components/shared/Headline";
import Paragraph from "components/shared/Paragraph";
import React from "react";
import { styled } from "styled-components";
import { getFrequencyLabel } from "utils/helper";

const DataBreakdownStyle = styled.div`
  margin-bottom: 2rem;

  h2 {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 2rem;
  }

  .table-wrapp {
    overflow: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    border: 1px solid var(--border);
    padding: 0.75rem;
    text-align: center;
  }

  th {
    background-color: var(--header-table);
    color: var(--text-color);
    font-weight: bold;
  }

  td {
    color: var(--text-color);
  }
`;

const DataBreakdown = ({ lineData, frequency, currency, currencySymbols }) => {
  const frequencyLabel = getFrequencyLabel(frequency);

  // Fixing the condition to check if lineData is empty
  if (lineData && lineData.length > 0) {
    return (
      <DataBreakdownStyle>
        <Headline as="h2">Investment Breakdown</Headline>
        <Paragraph>
          Detailed breakdown of your investment showing the monthly
          contributions, interest earned, and the total balance for each month.
        </Paragraph>
        <div className="table-wrapp">
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
        </div>
      </DataBreakdownStyle>
    );
  }

  return null; // If no lineData is available, render nothing
};

export default DataBreakdown;
