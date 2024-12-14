import Header from "components/layout/Header";

import { createGlobalStyle } from "styled-components";

// Import Google Fonts using @import
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Manrope:wght@200..800&display=swap');
  body {
    margin: 0;
    padding: 0;
    font-family: "Manrope", sans-serif;
    background-color: #f9f9f9;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  );
}

export default App;
