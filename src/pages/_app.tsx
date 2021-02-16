import { useStore } from '../store/store';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import '../styles/font.css';
import '../styles/global.css';
import GlobalColors, { darkTheme, lightTheme } from '../styles/theme';
import React, { useState } from 'react';
import { PreventIllegalTheft } from '../lib/functions/prevent-illegal-theft';
import { AnimatePresence } from 'framer-motion';
import initFirebase from '../utils/initFirebase';
import type { AppProps /*, AppContext */ } from 'next/app';
import ThemeChangeButton from '../components/button/theme-change-button';
import Header from '../components/header/header';
import { useRouter } from 'next/router';
import TabNavBar from '../components/page/index/tab-nav-bar';
import MyToast from '../components/toast/toast';
import ShareModal from '../components/page/article/article-tool-bar/share-modal';

export default function ShareDesignApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);
  const persistor = persistStore(store, {}, function () {
    persistor.persist();
  });
  const [mode, setMode] = useState(darkTheme);

  initFirebase();
  PreventIllegalTheft();

  const router = useRouter();

  // MyToast
  const [toastOn, setToastOn] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const showToast = (toastMessage: string) => {
    // 연속 클릭 방지
    if (toastOn === true) return;
    else if (toastOn === false) {
      setToastOn(true);
      setToastMessage(toastMessage);
      setTimeout(() => setToastOn(false), 1850);
    }
  };
  // MyToast

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
            <GlobalColors />
            {/* AnimatePresence 밖에 Header 있어야 re-render 안 됨 */}
            <Header />
            {/* Page Transition 위해 AnimatePresence는 _app에 정의 */}
            {/* <AnimatePresence> */}
            {/* 여기서 모든 페이지가 key를 갖고 있기 때문에 다른 곳에서는 따로 key를 지정하지 않아도 된다 */}
            <Component //
              {...pageProps}
              showToast={showToast}
              // key={router.pathname}
              // exit Animation 위해 필요한 key
            />
            {/* </AnimatePresence> */}
            {/* AnimatePresence 밖에 TabNavBar 있어야 re-render 안 됨 */}
            <TabNavBar />
            <ShareModal showToast={showToast} />
            <MyToast toastOn={toastOn} toastMessage={toastMessage} />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
