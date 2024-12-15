// => Import Dependencies
import { createGlobalStyle } from "styled-components";
import "normalize.css";

// => Create Global Styles
const GlobalStyles = createGlobalStyle`

:root {
  --primary-color: #1A73E8; /* Blue for buttons and accents */
  --secondary-color: #56CCF2; /* Lighter blue for hover effects */
  --accent-color: #0DC1AB; /* Green */
  --background-color: #F4F6F9; /* Soft off-white background */
  --card-background: #FFFFFF; /* White for the main content cards */
  --text-color: #333333; /* Dark grey text for good readability */
  --heading-color: #2F80ED; /* Bold blue for headings and important figures */
  --label-color: #828282; /* Light grey for labels and placeholder text */
  --border: #BDBDBD; /* Soft border color for inputs */
  --button-background: var(--primary-color);
  --button-text-color: #FFFFFF; /* White text for buttons */
  --button-hover-color: #2F80ED; /* Blue for button hover effect */
  --error-color: #EB5757; /* Red for error messages */
  --success-color: #6FCF97; /* Green for success messages */
}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .btn {
    display: block;
    width: 100%;
    padding: 0.5rem 1rem;
    background-color: var(--button-background);
    color: var(--button-text-color);
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: var(--button-hover-color);
    }
  }

`;

export default GlobalStyles;
