import {
    DefaultStoreState,
    Selector as BaseSelector,
  } from '../utils/store/action';
  import { GalleryResponse } from './gallery';
  
  export interface StoreState extends DefaultStoreState {
    gallery: GalleryResponse;
  }
  
  export type StoreSelector<TSelected> = BaseSelector<TSelected, StoreState>;