// => Import Dependencies
import { createGlobalStyle } from "styled-components";
import "normalize.css";

// => Create Global Styles
const GlobalStyles = createGlobalStyle`

:root {
  --primary-color: #2D9CDB; /* Blue for buttons and accents */
  --secondary-color: #56CCF2; /* Lighter blue for hover effects */
  --background-color: #F4F6F9; /* Soft off-white background */
  --card-background: #FFFFFF; /* White for the main content cards */
  --text-color: #333333; /* Dark grey text for good readability */
  --heading-color: #2F80ED; /* Bold blue for headings and important figures */
  --input-background: #F2F2F2; /* Light grey for input fields */
  --border: #BDBDBD; /* Soft border color for inputs */
  --button-text-color: #FFFFFF; /* White text for buttons */
  --button-hover-color: #2F80ED; /* Blue for button hover effect */
  --chart-line-color: #27AE60; /* Green for the growth line in the chart */
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

`;

export default GlobalStyles;
