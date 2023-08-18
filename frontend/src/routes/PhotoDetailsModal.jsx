import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ photo, onCloseModal }) => {
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
        
        {/* Display similar photos */}
        <div className="photo-details-modal__similar-photos">
          {/* Map through similar photos and display them */}
          {Object.values(photo.similar_photos).map((similarPhoto) => (
            <div key={similarPhoto.id} className="photo-details-modal__similar-photo">
              <img src={similarPhoto.urls.regular} alt={`Similar Photo by ${similarPhoto.user.name}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;

