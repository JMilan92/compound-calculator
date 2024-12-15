import { styled } from "styled-components";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from "recharts";

const DataVizualizationStyle = styled.div`
        grid-column: 2 / 4;

        background-color: white;
        border-radius: 12px;
        padding: 1rem;
`;

// Define the colors for the Pie chart
const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const DataVisualization = ({ pieData = [], lineData = [] }) => {

  return (
    <DataVizualizationStyle>
      {lineData.length > 0 && (
        <div style={{ width: "100%", height: 300, marginTop: "2rem" }}>
          <h2>Growth Over Time (Line Chart)</h2>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="total"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <ReferenceLine y={0} label="Zero" stroke="red" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {pieData.length > 0 && (
        <div style={{ width: "100%", height: 300 }}>
          <h2>Investment Breakdown (Pie Chart)</h2>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}

    </DataVizualizationStyle>
  );
};

export default DataVisualization;
