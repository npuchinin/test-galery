import { StoreSelector } from '../types';
import { GalleryResponse } from './actions';

export const getGallery: StoreSelector<GalleryResponse> = state => state.gallery;
