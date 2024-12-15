export const calculateCompoundInterest = ({
    deposit,
    yearlyReturn,
    monthlyContribution,
    period,
    compoundingFrequency,
  }) => {
    const P = parseFloat(deposit);
    const r = parseFloat(yearlyReturn) / 100;
    const C = parseFloat(monthlyContribution);
    const t = parseInt(period);
  
    let n;
    switch (compoundingFrequency) {
      case "annually":
        n = 1;
        break;
      case "quarterly":
        n = 4;
        break;
      case "monthly":
        n = 12;
        break;
      default:
        n = 12;
    }
  
    const lineData = [];
    let totalInvested = 0;
  
    for (let i = 1; i <= t * n; i++) {
      const balance =
        P * Math.pow(1 + r / n, i) +
        C * ((Math.pow(1 + r / n, i) - 1) / (r / n));
      const interestEarned = balance - (P + totalInvested);
      totalInvested += C;
  
      lineData.push({
        label: `${i}`,
        invested: P + totalInvested,
        interest: interestEarned,
        total: balance,
      });
    }
  
    const total = P * Math.pow(1 + r / n, n * t) + C * ((Math.pow(1 + r / n, n * t) - 1) / (r / n));
  
    return {
      total: total.toFixed(2), // Method used to round the number to 2 decimal places
      pieData: [
        { name: "Initial Deposit", value: P },
        { name: "Contributions", value: C * t * 12 },
        { name: "Interest Earned", value: total - P - C * t * 12 },
      ],
      lineData,
    };
  };
  