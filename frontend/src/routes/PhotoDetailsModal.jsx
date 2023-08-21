import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import { useFavContext } from 'components/FavContext';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({ photo, onCloseModal }) => {
  console.log('main photo:', photo);
  const id = photo.id;
  const { favorites, toggleFavorite } = useFavContext();
  const isFavorite = favorites.includes(id);
  return (
    <div className="photo-details-modal">
       <button className="photo-details-modal__close-button" onClick={onCloseModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="container">
      <div className="photo-details-modal__main-photo">
  
      <div className="photo-details-modal__content">
        {/* Display larger version of the selected photo */}
        <div className="photo-details-modal__main-photo-details">
          <img className="photo-details-modal__image"src={photo.urls.full} alt={`Photo by ${photo.user.name}`} />
      <br></br>
        <img
            className="photo-details-modal__user-profile"
            src={photo.user.profile}
            alt={`Profile of ${photo.user.username}`}
          />
          <div className="photo-details-modal__fav-button">
        <PhotoFavButton isFavorite={isFavorite} toggleFavorite={() => toggleFavorite(id)} />
        </div>
        <div className="photo-details-modal__user-details">{photo.user.name}</div>

        <div className="photo-details-modal__user-location">{`${photo.location.city}, ${photo.location.country}`}</div>
        </div>
        </div>
        </div>
        </div>
        {/* Display similar photos */}
        <h3 className="title">Similar Photos</h3>
        <div className="photo-details-modal__similar-photos">
      
          <PhotoList photos={Object.values(photo.similar_photos)}/>
        </div>
      </div>
 
  );
};

export default PhotoDetailsModal;

