export const calculateCompoundInterest = ({
  deposit,
  yearlyReturn,
  monthlyContribution,
  period,
  compoundingFrequency,
}) => {
  const P = parseFloat(deposit); // Initial deposit
  const r = parseFloat(yearlyReturn) / 100; // Annual interest rate
  const t = parseInt(period); // Time period in years
  let C = parseFloat(monthlyContribution); // Monthly contribution

  // Adjust contributions based on compounding frequency
  if (compoundingFrequency === "annually") {
    C = C * 12; // Convert monthly contribution to annual
  } else if (compoundingFrequency === "quarterly") {
    C = C * 3; // Convert monthly contribution to quarterly
  }

  const lineData = [];
  let totalInvested = 0;
  let totalInterest = 0;

  // Calculate balance for each year (since compounding is yearly)
  for (let i = 1; i <= t; i++) {
    // Compound interest formula for the initial deposit and contributions
    const balance =
      P * Math.pow(1 + r, i) + C * ((Math.pow(1 + r, i) - 1) / r);

    // Interest earned is the balance minus the total invested so far
    totalInvested += C; // Add the yearly contribution

    // Interest on the initial deposit
    const depositInterest = P * Math.pow(1 + r, i) - P;

    // Interest on the monthly contributions over time
    const contributionInterest = C * ((Math.pow(1 + r, i) - 1) / r) - C * i;

    totalInterest = depositInterest + contributionInterest;

    // Add to lineData to plot each value
    lineData.push({
      label: `${i}`,  // Year
      invested: P + totalInvested, // Total invested
      interest: totalInterest, // Interest earned
      total: balance, // Total (balance)
    });
  }

  // Calculate final total balance after the full period
  const total =
    P * Math.pow(1 + r, t) +
    C * ((Math.pow(1 + r, t) - 1) / r);

  // Prepare pie chart data
  const contributions = C * t; // Total contributions (based on compounding frequency)
  const interestEarned = total - P - contributions; // Interest earned

  return {
    total: total.toFixed(2), // Round total to 2 decimal places
    pieData: [
      { name: "Initial Deposit", value: P },
      { name: "Contributions", value: contributions },
      { name: "Interest Earned", value: interestEarned },
    ],
    lineData, // Return the lineData with invested, interest, and total
  };
};
