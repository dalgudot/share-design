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
import ModeChangeButton from '../components/button/mode-change-button';
import { PreventIllegalTheft } from '../components/func/prevent-illegal-theft';
import { AnimatePresence } from 'framer-motion';
import initFirebase from '../utils/initFirebase';
import Toast from '../components/toast/toast-func';
import type { AppProps /*, AppContext */ } from 'next/app';

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
            <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} theme={mode} />
            </AnimatePresence>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
