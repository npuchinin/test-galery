import { compose, createStore, Store, StoreEnhancer } from 'redux';
import rootReducer, { AppAction } from './reducers';
import { StoreState } from './types';

type ComposeType = typeof compose;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: ComposeType | ((arg: unknown) => ComposeType);
    __REDUX_DEVTOOLS_EXTENSION__: () => StoreEnhancer;
  }
}

export const initializeStore = (): { store: Store<StoreState, AppAction> } => {
  const store = createStore(rootReducer);
  return { store };
};

export default initializeStore;
