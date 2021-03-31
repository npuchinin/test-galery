import { combineReducers, Reducer } from 'redux';
import { galleryReducer, GallerySetAction } from './gallery';
import { StoreState } from './types';

export type AppAction = GallerySetAction;

export const rootReducer: Reducer<StoreState, AppAction> = combineReducers({
  gallery: galleryReducer,
});

export default rootReducer;
