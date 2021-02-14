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
import Toast from '../elements/toastify';
import type { AppProps /*, AppContext */ } from 'next/app';
import ThemeChangeButton from '../elements/button/theme-change-button';
import Header from '../components/header/header';
import { useRouter } from 'next/router';
import TabNavBar from '../components/tab-nav-bar/tab-nav-bar';

export default function ShareDesignApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);
  const persistor = persistStore(store, {}, function () {
    persistor.persist();
  });
  const [mode, setMode] = useState(darkTheme);

  initFirebase();
  PreventIllegalTheft();

  const router = useRouter();

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/* <ThemeChangeButton
              setTheme={setMode}
              lightTheme={lightTheme}
              darkTheme={darkTheme}
            /> */}
          <ThemeProvider theme={mode}>
            <Toast />
            <GlobalColors />
            {/* AnimatePresence 밖에 Header 있어야 re-render 안 됨 */}
            <Header />
            {/* Page Transition 위해 AnimatePresence는 _app에 정의 */}
            <AnimatePresence exitBeforeEnter>
              {/* 여기서 모든 페이지가 key를 갖고 있기 때문에 다른 곳에서는 따로 key를 지정하지 않아도 된다 */}
              <Component //
                {...pageProps}
                key={router.route} // exit Animation 위해 필요한 key
              />
            </AnimatePresence>
            {/* AnimatePresence 밖에 TabNavBar 있어야 re-render 안 됨 */}
            <TabNavBar />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

// <AnimatePresence onExitComplete={handleExitComplete}>
// const handleExitComplete = () => {
//   const bodyId = document.querySelector('body');
//   if (typeof window !== 'undefined') {
//     bodyId?.scrollTo({ top: 0 });
//   }
// };
