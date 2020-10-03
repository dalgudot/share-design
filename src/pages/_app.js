import { useStore } from "../store/store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import "../styles/globals.css";
import "../styles/color.css";
import "../styles/font.css";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const persistor = persistStore(store, {}, function () {
    persistor.persist();
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

// import { useStore } from "../store/store";
// import { Provider } from "react-redux";
// import { persistStore } from "redux-persist";
// import { PersistGate } from "redux-persist/integration/react";
// import "../styles/globals.css";
// import "../styles/color.css";
// import "../styles/font.css";
// import Youtube from './youtube';

// const youtube = new Youtube("test")

// export default function App({ Component, pageProps }) {
//   const store = useStore(pageProps.initialReduxState);
//   const persistor = persistStore(store, {}, function () {
//     persistor.persist();
//   });

//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <Component {...pageProps} />
//       </PersistGate>
//     </Provider>
//   );
// }
