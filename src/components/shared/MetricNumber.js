import React from "react";
import { styled } from "styled-components";

const MetricNumberStyle = styled.p`
 &.metric {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    flex-direction: column;
    align-items: center;
  }

  & .metric__label {
    color: var(--text-color);
    margin-bottom: 0.5rem;
  }

  & .metric__number {
      font-weight: 600;
      font-size: 2rem;
      color: var(--text-color);

      &--earned {
        color: var(--accent-color);
      }

      &--total {
        color: var(--primary-color);
      }
    }
`;

const MetricNumber = ({ label, number, currencySymbol = "", customClass = "" }) => {
    return (
    <MetricNumberStyle className="metric">
      <span className="metric__label">{label}</span>
      <span className={`metric__number metric__number--${customClass}`}>
        {currencySymbol}
        {new Intl.NumberFormat().format(number)}
      </span>
    </MetricNumberStyle>
  );
};

export default MetricNumber;
