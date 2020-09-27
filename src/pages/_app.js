import { Provider } from "react-redux";
import { useStore } from "../../store";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

// import "../styles/globals.css";
// import React from "react";
// import App from "next/app";
// import { appWithTranslation } from "../../i18n";

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// MyApp.getInitialProps = async (appContext) => {
//   const appProps = await App.getInitialProps(appContext);
//   return { ...appProps };
// };

// export default appWithTranslation(MyApp);

// import App from "next/app";
// import { appWithTranslation } from "/i18n";

// const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

// MyApp.getInitialProps = async (appContext) => ({
//   ...(await App.getInitialProps(appContext)),
// });

// export default appWithTranslation(MyApp);

// import "../styles/globals.css";

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// export default MyApp;
