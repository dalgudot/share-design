import HeadInfo from '../components/head-info/head-info';
import { indexInfo } from '../components/head-info/head-info-text';
import { useStore } from '../store/store';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import '../styles/font.css';
import '../styles/global.css';
import { darkTheme, lightTheme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalColors from '../styles/theme';
import { useState, useEffect } from 'react';
import ModeChangeButton from '../components/button/mode-change-button';
import { PreventIllegalTheft } from '../components/func/prevent-illegal-theft';
import { AnimatePresence } from 'framer-motion';
import initFirebase from '../../utils/initFirebase';
import Toast from '../components/toast/toast-func';
import type { AppProps /*, AppContext */ } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);
  const persistor = persistStore(store, {}, function () {
    persistor.persist();
  });
  const [mode, setMode] = useState(darkTheme);
  // console.log(mode);

  initFirebase();
  PreventIllegalTheft();

  return (
    <>
      <HeadInfo info={indexInfo} />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={mode}>
            {/* <ModeChangeButton
              setMode={setMode}
              darkTheme={darkTheme}
              lightTheme={lightTheme}
            /> */}
            <GlobalColors />
            <Toast />
            <AnimatePresence exitBeforeEnter>
              <Component
                {...pageProps}
                // setMode={setMode}
                // darkTheme={darkTheme}
                // lightTheme={lightTheme}
              />
            </AnimatePresence>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
