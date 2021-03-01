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

type InitialStateTypes = {
  themeMode: string;
  openModal: boolean;
  modalZIndexHandler: boolean;
  visited: boolean;
};

type actionTypesTypes = {
  MODE_CHANGE: string;
  OPEN_MODAL: string;
  MODAL_Z_INDEX_HANDLER: string;
  WAS_VISITED: string;
};

const InitialState: InitialStateTypes = {
  themeMode: 'darkTheme',
  openModal: false,
  modalZIndexHandler: false,
  visited: false,
};

export const actionTypes: actionTypesTypes = {
  MODE_CHANGE: 'MODE_CHANGE',
  OPEN_MODAL: 'OPEN_MODAL',
  MODAL_Z_INDEX_HANDLER: 'MODAL_Z_INDEX_HANDLER',
  WAS_VISITED: 'WAS_VISITED',
};

export const reducer = (state = InitialState, action: any) => {
  switch (action.type) {
    case actionTypes.MODE_CHANGE:
      return {
        ...state,
        themeMode: state.themeMode === 'darkTheme' ? 'lightTheme' : 'darkTheme',
      };

    case actionTypes.OPEN_MODAL:
      return {
        ...state,
        openModal: state.openModal === false ? true : false,
      };

    case actionTypes.MODAL_Z_INDEX_HANDLER:
      return {
        ...state,
        modalZIndexHandler: state.modalZIndexHandler === false ? true : false,
      };

    case actionTypes.WAS_VISITED:
      return {
        ...state,
        visited: state.visited === false && true,
      };

    default:
      return state;
  }
};

const persistConfig = {
  key: 'SHARE DESIGN',
  storage,
  whitelist: ['visited', 'themeMode'], // place to select which state you want to persist
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
