// helpers.js or utils.js
export const getFrequencyLabel = (frequency, count = 1) => {
    const baseLabel =
      frequency === "monthly"
        ? "Month"
        : frequency === "quarterly"
        ? "Quarter"
        : "Year";
  
    // Add 's' if the count is greater than 1
    return count > 1 ? `${baseLabel}s` : baseLabel;
  };
  
// Function to format numbers into shorter versions (e.g., 1M, 1K)
  export const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    } else {
      return num.toFixed(2); // Ensure two decimal places for smaller numbers
    }
  };