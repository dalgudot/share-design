import { useStore } from "../store/store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import "../styles/font.css";
import { darkTheme } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global-styles";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const persistor = persistStore(store, {}, function () {
    persistor.persist();
  });

  // 마우스 오른쪽 클릭(oncontextmenu), 왼쪽 마우스 이미지 드래그(ondragstart), 왼쪽 마우스 문자 드래그(onselectstart), 키보드 단축키 복사(onkeydown) 막기
  // useEffect(() => {
  //   document.oncontextmenu = document.ondragstart = document.onselectstart = document.onkeydown = new Function(
  //     "return false"
  //   );
  // }, []);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={darkTheme}>
            <GlobalStyles />
            <Component {...pageProps} />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
