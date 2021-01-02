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
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage();
// E of 리덕스 오류 해결

let store: any;

const InitialState: InitialStateTypes = {
  language: 'ko',
  themeMode: 'darkTheme',
  userLanguageChange: 'no',
  tabNavBar: 'home',
  subNavBar: 'contact',
};

export const actionTypes: actionTypesTypes = {
  LANGUAGE_CHANGE: 'LANGUAGE_CHANGE',
  MODE_CHANGE: 'MODE_CHANGE',
  USER_LANGUAGE_CHANGE_CHANGE: 'USER_LANGUAGE_CHANGE_CHANGE',
  TAB_NAV_CHANGE: 'TAB_NAV_CHANGE',
  SUB_NAV_CHANGE: 'SUB_NAV_CHANGE',
};

export const reducer = (state = InitialState, action: any) => {
  switch (action.type) {
    case actionTypes.LANGUAGE_CHANGE:
      return {
        ...state,
        language: state.language === 'ko' ? 'en' : 'ko',
      };

    case actionTypes.MODE_CHANGE:
      return {
        ...state,
        themeMode: state.themeMode === 'darkTheme' ? 'lightTheme' : 'darkTheme',
      };

    case actionTypes.USER_LANGUAGE_CHANGE_CHANGE:
      return {
        ...state,
        userLanguageChange: state.userLanguageChange === 'no' ? 'yes' : 'no',
      };

    case actionTypes.TAB_NAV_CHANGE:
      return {
        ...state,
        tabNavBar: state.tabNavBar === 'home' ? 'menu' : 'home',
      };

    case actionTypes.SUB_NAV_CHANGE:
      return {
        ...state,
        subNavBar: state.subNavBar === 'welcome' ? 'contact' : 'welcome',
      };

    default:
      return state;
  }
};

const persistConfig = {
  key: 'primary',
  storage,
  whitelist: ['language', 'themeMode', 'userLanguageChange'], // place to select which state you want to persist
};

const persistedReducer = persistReducer(persistConfig, reducer);

function makeStore(initialState: any = InitialState) {
  return createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  );
}

export const initializeStore = (preloadedState: any) => {
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

export function useStore(initialState: any) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}

// type
interface InitialStateTypes {
  language: string;
  themeMode: string;
  userLanguageChange: string;
  tabNavBar: string;
  subNavBar: string;
}

interface actionTypesTypes {
  LANGUAGE_CHANGE: string;
  MODE_CHANGE: string;
  USER_LANGUAGE_CHANGE_CHANGE: string;
  TAB_NAV_CHANGE: string;
  SUB_NAV_CHANGE: string;
}
