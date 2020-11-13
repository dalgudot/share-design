import { useStore } from '../store/store';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import '../styles/font.css';
import { darkTheme, lightTheme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/global-styles';
import { useState, useEffect } from 'react';
import ModeChangeButton from '../components/button/mode-change-button';
import { PreventIllegalTheft } from '../components/func/prevent-illegal-theft';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const persistor = persistStore(store, {}, function () {
    persistor.persist();
  });
  const [mode, setMode] = useState(darkTheme);
  console.log(mode);

  PreventIllegalTheft();

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={mode}>
            <ModeChangeButton
              setMode={setMode}
              darkTheme={darkTheme}
              lightTheme={lightTheme}
            />
            <GlobalStyles />
            <AnimatePresence>
              <Component
                {...pageProps}
                setMode={setMode}
                darkTheme={darkTheme}
                lightTheme={lightTheme}
              />
            </AnimatePresence>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
