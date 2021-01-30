import { useStore } from '../store/store';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import '../styles/font.css';
import '../styles/global.css';
import GlobalColors, { darkTheme, lightTheme } from '../styles/theme';
import { useState } from 'react';
import { PreventIllegalTheft } from '../lib/functions/prevent-illegal-theft';
import { AnimatePresence } from 'framer-motion';
import initFirebase from '../utils/initFirebase';
import Toast from '../elements/toast/toastify';
import type { AppProps /*, AppContext */ } from 'next/app';
import ThemeChangeButton from '../elements/button/theme-change-button';
import Header from '../components/header/header';

export default function ShareDesignApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);
  const persistor = persistStore(store, {}, function () {
    persistor.persist();
  });
  const [mode, setMode] = useState(darkTheme);

  initFirebase();
  PreventIllegalTheft();

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={mode}>
            <GlobalColors />
            {/* <ThemeChangeButton
              setTheme={setMode}
              lightTheme={lightTheme}
              darkTheme={darkTheme}
            /> */}
            <Header />
            <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} />
            </AnimatePresence>
            <Toast />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
