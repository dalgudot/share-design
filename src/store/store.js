import { useMemo } from "react";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

let store;

const InitialState = {
  language: "ko",
};

// export const actionTypes = {
//   TICK: "TICK",
//   INCREMENT: "INCREMENT",
//   DECREMENT: "DECREMENT",
//   RESET: "RESET",
//   LOAD_EXAMPLE_DATA: "LOAD_EXAMPLE_DATA",
//   LOADING_DATA_FAILURE: "LOADING_DATA_FAILURE",
// };

// REDUCERS
export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case "CHANGELANGUAGE":
      return {
        ...state,
        language: state.language === "ko" ? "en" : "ko",
      };

    default:
      return state;
  }
};

// ACTIONS
export const serverRenderClock = () => {
  return { type: actionTypes.TICK, light: false, ts: Date.now() };
};
export const startClock = () => {
  return { type: actionTypes.TICK, light: true, ts: Date.now() };
};

export const incrementCount = () => {
  return { type: actionTypes.INCREMENT };
};

export const decrementCount = () => {
  return { type: actionTypes.DECREMENT };
};

export const resetCount = () => {
  return { type: actionTypes.RESET };
};

export const loadExampleData = (data) => {
  return { type: actionTypes.LOAD_EXAMPLE_DATA, data };
};

export const loadingExampleDataFailure = () => {
  return { type: actionTypes.LOADING_DATA_FAILURE };
};

const persistConfig = {
  key: "primary",
  storage,
  whitelist: ["language"], // place to select which state you want to persist
};

const persistedReducer = persistReducer(persistConfig, reducer);

function makeStore(initialState = InitialState) {
  return createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  );
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? makeStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = makeStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
