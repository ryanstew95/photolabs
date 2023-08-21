import { useReducer, useEffect } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favoritePhotoIds: [...state.favoritePhotoIds, action.payload.photoId],
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photos: action.payload.photos,
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topics: action.payload.topics,
      };
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhotoId: action.payload.photoId,
      };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        displayPhotoDetails: action.payload.display,
      };
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}

function useApplicationData() {
  const initialState = {
    favoritePhotoIds: [],
    selectedPhotoId: null,
    topics: [],   
    photos: [],   
    displayPhotoDetails: false,
  };
const [state, dispatch] = useReducer(reducer, initialState);

  const updateToFavPhotoIds = (photoId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { photoId } });
  };

  const setPhotoSelected = (photos) => {
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photos } });
  };

  const onClosePhotoDetailsModal = (display) => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { display } });
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  };
}

export default useApplicationData;
