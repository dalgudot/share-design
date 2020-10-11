import { useStore } from "../store/store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { darkTheme, lightTheme } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global-styles";
import { useState } from "react";
import ModeChangeButton from "../components/button/mode-change-button";
import { PreventIllegalTheft } from "../components/lang/func/prevent-illegal-theft";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const persistor = persistStore(store, {}, function () {
    persistor.persist();
  });

  // darkMode & lightMode
  const [mode, setMode] = useState(darkTheme);

  PreventIllegalTheft();

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={mode}>
            {/* <ModeChangeButton
              mode={mode}
              setMode={setMode}
              darkTheme={darkTheme}
              lightTheme={lightTheme}
            /> */}
            <GlobalStyles />
            <Component {...pageProps} />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
