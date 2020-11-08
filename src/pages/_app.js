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

  PreventIllegalTheft();

  // Amplitude initialize
  // 참고: https://developers.amplitude.com/docs/advanced-settings
  useEffect(() => {
    if (typeof window !== undefined) {
      const amplitude = require('amplitude-js');
      amplitude
        .getInstance()
        .init(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY, null, {
          // optional configuration options
          // 쿠키 저장하는 도메인 지정
          // domain: ".khk-design.kr",
          // saveEvents: false,
        });
    }
  }, []);

  function handleExitComplete() {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0 });
    }
  }

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
            <AnimatePresence onExitComplete={handleExitComplete}>
              <Component {...pageProps} />
            </AnimatePresence>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
