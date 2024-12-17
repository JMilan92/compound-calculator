// => Import Dependencies
import { createGlobalStyle } from "styled-components";
import "normalize.css";

// => Create Global Styles
const GlobalStyles = createGlobalStyle`

:root {
  --primary-color: #1A73E8; /* Blue for buttons and accents */
  --secondary-color: #56CCF2; /* Lighter blue for hover effects */
  --accent-color: #0DC1AB; /* Green */
  --background-color: linear-gradient(120deg, #FFFFFF, #F4F6F9 50%, #E9EDF3); /* Soft off-white background */
  --card-background: #FFFFFF; /* White for the main content cards */
  --text-color: #333333; /* Dark grey text for good readability */
  --heading-color: #2F80ED; /* Bold blue for headings and important figures */
  --label-color: #4a5568; /* Light grey for labels and placeholder text */
  --border: #BDBDBD; /* Soft border color for inputs */
  --border-light: #D1D1D1; /* Soft border color for inputs */
  --button-background: var(--primary-color);
  --button-text-color: #FFFFFF; /* White text for buttons */
  --button-hover-color: #1665C0; /* Blue for button hover effect */
  --error-color: #EB5757; /* Red for error messages */
  --success-color: #6FCF97; /* Green for success messages */
  --header-table: #f4f4f4; /* Light grey for table headers */

  --gradient-primary: linear-gradient(120deg, #3F8CFF, #164BCE);

  --modal-backdrop: rgba(0, 0, 0, 0.5); /* Semi-transparent black for modal backdrop */
}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
    height: auto;
  }

`;

export default GlobalStyles;
