// => Import Dependencies
import { createGlobalStyle } from "styled-components";
import "normalize.css";

// => Create Global Styles
const GlobalStyles = createGlobalStyle`

/* Light Theme */
:root {
  --primary-color: #1A73E8;
  --secondary-color: #56CCF2;
  --accent-color: #0DC1AB;
  --background-color: linear-gradient(120deg, #FFFFFF, #F4F6F9 50%, #E9EDF3);
  --card-background: #FFFFFF;
  --input-background: #FFFFFF;
  --text-color: #333333;
  --input-color: #333333;
  --heading-color: #2F80ED;
  --label-color: #4a5568;
  --border: #BDBDBD;
  --border-light: #D1D1D1;
  --button-background: var(--primary-color);
  --button-text-color: #FFFFFF;
  --button-hover-color: #1665C0;
  --error-color: #EB5757;
  --success-color: #6FCF97;
  --header-table: #f4f4f4;
  --gradient-primary: linear-gradient(120deg, #3F8CFF, #164BCE);
  --modal-backdrop: rgba(0, 0, 0, 0.5);

  --sun-dark: #D1D1D1;
  --sun-light: #333;
  --moon-dark: #D1D1D1;
  --moon-light: #333;
}

/* Dark Theme */
:root .dark {
  --primary-color: #1A73E8;
  --secondary-color: #56CCF2;
  --accent-color: #0DC1AB;
  --background-color: linear-gradient(120deg, #333333, #4A4A4A 50%, #2E2E2E);
  --card-background: #1E1E1E;
  --input-background: #1E1E1E;
  --text-color: #D1D1D1;
  --input-color: #D1D1D1;
  --heading-color: #82A9FF;
  --label-color: #A8A8A8;
  --border: #444444;
  --border-light: #666666;
  --button-background: var(--primary-color);
  --button-text-color: #FFF;
  --button-hover-color: #2A5EB5;
  --error-color: #EB5757;
  --success-color: #6FCF97;
  --header-table: #2C2C2C;
  --gradient-primary: linear-gradient(120deg, #3F8CFF, #164BCE);
  --modal-backdrop: rgba(0, 0, 0, 0.7);

  --sun-dark: #333;
  --sun-light: #D1D1D1;
  --moon-dark: #333;
  --moon-light: #D1D1D1;
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
