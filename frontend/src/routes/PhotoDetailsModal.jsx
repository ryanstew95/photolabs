import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import FavIcon from 'components/FavIcon';
import { useFavContext } from 'components/FavContext';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';
const PhotoDetailsModal = ({ photo, onCloseModal, id }) => {
  console.log('main photo:', photo);
  // console.log(Object.values(photo.similar_photos));
  const { favorites, toggleFavorite } = useFavContext();
  const isFavorite = favorites.includes(id);
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onCloseModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__content">
        {/* Display larger version of the selected photo */}
        <div className="photo-details-modal__main-photo">
          <img className="photo-details-modal__image"src={photo.urls.full} alt={`Photo by ${photo.user.name}`} />
        </div>
        <img
            className="photo-details-modal__user-profile"
            src={photo.user.profile}
            alt={`Profile of ${photo.user.username}`}
          />
          <div className="photo-details-modal__fav-button" >
        <PhotoFavButton selected={isFavorite} onClick={() => toggleFavorite(id)} />
        </div>
        <div className="photo-details-modal__user-details">{photo.user.name}</div>

        <div className="photo-details-modal__user-location">{`${photo.location.city}, ${photo.location.country}`}</div>
        {/* Display similar photos */}
        <div className="photo-details-modal__similar-photos">
      
          <PhotoList photos={Object.values(photo.similar_photos)}/>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;

