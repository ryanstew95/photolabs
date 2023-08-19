import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import FavIcon from 'components/FavIcon';
import { useFavContext } from 'components/FavContext';
import PhotoList from 'components/PhotoListItem';
const PhotoDetailsModal = ({ photo, onCloseModal, id }) => {
  console.log(photo.similar_photos);
  console.log(Object.values(photo.similar_photos));
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
          <img src={photo.urls.full} alt={`Photo by ${photo.user.name}`} />
        </div>
        <FavIcon selected={isFavorite} onClick={() => toggleFavorite(id)} />
        {/* Display similar photos */}
        <div className="photo-details-modal__similar-photos">
      
          <PhotoList photos={Object.values(photo.similar_photos)}/>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;

