import '../styles/font.css';
import '../styles/global.css';
import { useStore } from '../store/store';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import GlobalColors, { darkTheme, lightTheme } from '../styles/theme';
import React, { useEffect, useState } from 'react';
import { PreventIllegalTheft } from '../lib/functions/prevent-illegal-theft';
import { AnimatePresence } from 'framer-motion';
import initFirebase from '../utils/initFirebase';
import type { AppProps /*, AppContext */ } from 'next/app';
import Header from '../components/common-components/header/header';
import { useRouter } from 'next/router';
import ResponsiveNavBar from '../components/common-components/nav-bar/responsive-nav-bar';
import Toast from '../components/common-components/toast/toast';
import ShareModal from '../components/common-components/modal/share-modal';
import HeadSEO from '../seo/head-seo';
import { RecoilRoot } from 'recoil';

export default function ShareDesignApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);
  const persistor = persistStore(store, {}, function () {
    persistor.persist();
  });

  const [mode, setMode] = useState(darkTheme);
  const router = useRouter();

  initFirebase();
  PreventIllegalTheft();

  return (
    <>
      <HeadSEO />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RecoilRoot>
            <ThemeProvider theme={mode}>
              <GlobalColors />
              {/* AnimatePresence 밖에 Header 있어야 re-render 안 됨 */}
              <Header
                setTheme={setMode}
                darkTheme={darkTheme}
                lightTheme={lightTheme}
              />
              <ResponsiveNavBar />
              {/* Page Transition 위해 AnimatePresence는 _app에 정의 */}
              {/* <AnimatePresence> */}
              {/* 여기서 모든 페이지가 key를 갖고 있기 때문에 다른 곳에서는 따로 key를 지정하지 않아도 된다 */}
              <Component //
                {...pageProps}
                // key={router.pathname}
                // exit Animation 위해 필요한 key
              />
              {/* </AnimatePresence> */}
              {/* AnimatePresence 밖에 ResponsiveNavBar 있어야 re-render 안 됨 */}
              {/* <ShareModal key={router.pathname} showToast={showToast} /> */}
              <Toast />
            </ThemeProvider>
          </RecoilRoot>
        </PersistGate>
      </Provider>
    </>
  );
}

// Amplitude initialize
// 참고: https://developers.amplitude.com/docs/advanced-settings
// useEffect(() => {
//   if (typeof window !== undefined) {
//     const amplitude = require('amplitude-js');
//     amplitude
//       .getInstance()
//       .init(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY, null, {
//         // optional configuration options
//       });
//   }
// }, []);
