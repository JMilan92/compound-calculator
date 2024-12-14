// => Impoort components
import GlobalStyles from "styles/GlobalStyles";
import Typography from "styles/Typography";
import Header from "components/layout/Header";
import Main from "components/layout/Main";

const Layout = () => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Header />
      <Main />
    </>
  );
};

export default Layout;
