import "../styles/globals.css";
import App from "next/app";
import { appWithTranslation } from "../../i18n";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};
export default appWithTranslation(MyApp);

// import "../styles/globals.css";
// import App from "next/app";
// import { appWithTranslation } from "../../i18n";

// const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

// MyApp.getInitialProps = async (appContext) => ({
//   ...(await App.getInitialProps(appContext)),
// });

// export default appWithTranslation(MyApp);
