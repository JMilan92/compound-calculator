// => Import Dependencies
import { createGlobalStyle } from "styled-components";
import "normalize.css";

import Arrow from "assets/icons/arrow-up-right.svg";

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
    line-height: 20px;
    color: var(--button-text-color);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background: linear-gradient(120deg, #3F8CFF, #164BCE);
    background-size: 200% 200%;
    background-position: left center;
    transition: background-position 0.3s ease, box-shadow 0.3s ease;
    position: relative;

    &:hover {
      background-position: right center;
      box-shadow: 0px 4px 15px rgba(26, 115, 232, 0.6);
    }
  }

  .btn > span {
    position: relative;
    display: inline-block;
  }

  .btn > span::after {
    content: "";
    position: absolute;
    right: -20px;
    top: 100%;
    transform: translateY(10px);
    width: 20px;
    height: 20px;
    background: url(${Arrow}) no-repeat center center;
    background-size: contain; 
    opacity: 0; 
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .btn:hover span::after {
    opacity: 1; 
    transform: translateY(-20px); 
  }

`;

export default GlobalStyles;
