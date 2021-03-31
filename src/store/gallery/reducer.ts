import { Reducer } from 'redux';
import { GalleryResponse, GallerySetAction, GalleryActionType } from './actions';

export const galleryReducer: Reducer<GalleryResponse, GallerySetAction> = (
  state,
  action,
) => {
  if (state === undefined) return { elements: [
  {
    "url": "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/493550746.jpg",
  },
  {
    "url": "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964007.jpg",
  },
  {
    "url": "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/493550739.jpg",
  },
  {
    "url": "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964009.jpg",
  },
  {
    "url": "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/493550740.jpg",
  },
  {
    "url": "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964008.jpg",
  },
  {
    "url": "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964011.jpg",
  },
  {
    "url": "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/493550755.jpg",
  },
  {
    "url": "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964013.jpg",
  },
  {
    "url": "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/493550745.jpg",
  },
  {
    "url": "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964014.jpg",
  },
  {
    "url": "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964016.jpg",
  },
  {
    "url": "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964020.jpg",
  },
  {
    "url": "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964010.jpg",
  },
  {
    "url": "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/493550754.jpg",
  },
  {
    "url": "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964021.jpg",
  },
  {
    "url": "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964012.jpg",
  }] };
  switch (action.type) {
    case GalleryActionType.SET_IMAGES:
      return {...state, elements: [...state.elements, action.payload]};
    default:
      return state;
  }
};
