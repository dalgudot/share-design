import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// S of 리덕스 오류 해결
// redux-persist failed to create sync storage. falling back to noop storage.
// This log occurs on the server-side (when you import storage from redux-persist/lib/storage) because you cannot create the local storage. Here is my workaround:
// https://github.com/vercel/next.js/discussions/15687
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage();
// E of 리덕스 오류 해결

let store;

const InitialState = {
  language: 'ko',
  localMode: 'darkTheme',
  userLanguageChange: 'no',
};

export const actionTypes = {
  CHANGELANGUAGE: 'CHANGELANGUAGE',
  MODECHANGE: 'MODECHANGE',
  CHANGEUSERLANGUAGE: 'CHANGEUSERLANGUAGE',
};

// REDUCERS
export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGELANGUAGE:
      return {
        ...state,
        language: state.language === 'ko' ? 'en' : 'ko',
      };

    case actionTypes.MODECHANGE:
      return {
        ...state,
        localMode: state.localMode === 'darkTheme' ? 'lightTheme' : 'darkTheme',
      };

    case actionTypes.CHANGEUSERLANGUAGE:
      return {
        ...state,
        userLanguageChange: state.userLanguageChange === 'no' ? 'yes' : 'no',
      };

    default:
      return state;
  }
};

const persistConfig = {
  key: 'primary',
  storage,
  whitelist: ['language', 'localMode', 'userLanguageChange'], // place to select which state you want to persist
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
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
