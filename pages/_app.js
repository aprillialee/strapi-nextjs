import Header from "components/Header";
import GlobalStyles from "components/GlobalStyles/GlobalStyles";
import ContextWrapper from "components/ContextWrapper";

import { ThemeProvider } from "emotion-theming";
import theme from "../theme/theme";

import getConfig from "next/config";
import fetch from "isomorphic-unfetch";

import { defaultSEO, DefaultSeo } from "next-seo";

import SEO from "../next-seo.config";

function MyApp({ Component, pageProps, navigation }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ContextWrapper navigation={navigation}>
          <Header />
        </ContextWrapper>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

const { publicRuntimeConfig } = getConfig();

MyApp.getInitialProps = async () => {
  const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`);
  const navigation = await res.json();

  return { navigation };
};

export default MyApp;
