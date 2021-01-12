import HeadInfo from '../components/head-info/head-info';
import { indexInfo } from '../components/head-info/head-info-text';
import { useStore } from '../store/store';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import '../styles/font.css';
import '../styles/global.css';
import GlobalColors, { darkTheme, lightTheme } from '../styles/theme';
import { useState } from 'react';
import { PreventIllegalTheft } from '../lib/funtions/prevent-illegal-theft';
import { AnimatePresence } from 'framer-motion';
import initFirebase from '../utils/initFirebase';
import Toast from '../components/toast/toastify';
import type { AppProps /*, AppContext */ } from 'next/app';
import ThemeChangeButton from '../components/button/theme-change-button';
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
      <HeadInfo info={indexInfo} />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={mode}>
            <GlobalColors />
            <Toast />
            {/* <ThemeChangeButton
              setTheme={setMode}
              lightTheme={lightTheme}
              darkTheme={darkTheme}
            /> */}
            <AnimatePresence exitBeforeEnter>
              <Header />
              <Component {...pageProps} />
            </AnimatePresence>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
