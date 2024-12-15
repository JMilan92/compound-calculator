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
  