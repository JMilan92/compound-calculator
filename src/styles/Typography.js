// => Impoort dependencies
import { createGlobalStyle } from "styled-components";

// => Define @Global Typography
const Typography = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Manrope:wght@200..800&display=swap');

  :root {
    --manrope-font-family: "Manrope", sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: var(--manrope-font-family);
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 700;
  }

  h1 {
    margin-bottom: 3rem;
  }

`;

export default Typography;
