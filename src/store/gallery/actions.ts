import { Action, actionCreator } from '../../utils/store/action';

export enum GalleryActionType {
    SET_IMAGES = 'SET_IMAGES',
}

export type GalleryImage = {
    url: string,
}

export type GalleryResponse = {
    elements: Array<GalleryImage>
}
export type GallerySetAction = Action<
    GalleryActionType.SET_IMAGES,
    GalleryImage
>;

export const setImages = actionCreator<GallerySetAction>(
    GalleryActionType.SET_IMAGES,
);