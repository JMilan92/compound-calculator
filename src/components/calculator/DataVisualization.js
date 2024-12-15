import { styled } from "styled-components";
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts";
import Headline from "components/shared/Headline";
import illustration from "assets/images/illustration.svg";

const DataVizualizationStyle = styled.div`

  .empty-state {
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 6rem;
    text-align: center;

    &__img {
      margin-bottom: 2rem;
    }
  }

  .chart {
    margin-bottom: 8rem;
  }

  h2 {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1.2rem;
  }
`;

// Define the colors for the Pie chart
const COLORS = ["#333", "#1A73E8", "#0DC1AB"];

// Helper function to format numbers to shorter version (e.g., 1000000 -> 1M)
const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  } else {
    return num.toFixed(2); // Ensure two decimal places for smaller numbers
  }
};

const DataVisualization = ({ pieData = [], lineData = [] }) => {
  // Function to format percentage values with 2 decimal places
  const formatPercentage = (value, total) => {
    const percentage = (value / total) * 100;
    return percentage.toFixed(2); // Format the percentage to 2 decimals
  };

  // Calculate the total of all values in pieData
  const totalValue = pieData.reduce((sum, entry) => sum + entry.value, 0);

  return (
    <DataVizualizationStyle>
      {lineData.length === 0 && (
        <div className="empty-state">
          <img
            className="empty-state__img"
            src={illustration}
            alt="Illustration"
          />
          <Headline as="h2">Start Your Investment Journey Today!</Headline>
          <p>
            Investing can be the key to building long-term wealth. The earlier
            you start, the more time your money has to grow through the power of
            compound interest. Let's get started—calculate your potential
            returns and watch your investments grow over time!
          </p>
        </div>
      )}

      {lineData.length > 0 && (
        <div className="chart" style={{ width: "100%", height: 300 }}>
          <Headline as="h2">Growth Over Time, vizualised</Headline>
          <p>
            This chart illustrates how your investments grow over time. As
            shown, the longer the investment period, the greater the effect of
            compound interest.
          </p>

          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis tickFormatter={formatNumber} /> {/* Format Y axis ticks */}
              <Tooltip formatter={(value) => formatNumber(value)} />{" "}
              {/* Format tooltip */}
              <Legend />
              <Line
                type="monotone"
                dataKey="total"
                stroke="#1A73E8"
                activeDot={{ r: 8 }}
              />
              <ReferenceLine y={0} stroke="grey" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {pieData.length > 0 && (
        <div className="chart" style={{ width: "100%", height: 300 }}>
          <Headline as="h2">Pie chart</Headline>
          <p>
            This pie chart breaks down the total return on your investment into
            three key components: the initial deposit, the total regular
            contributions you made, and the total interest earned over the
            selected period."
          </p>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={80}
                fill="#8884d8"
                label={({ value }) => `${formatPercentage(value, totalValue)}%`}
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </DataVizualizationStyle>
  );
};

export default DataVisualization;
