// PhotoFavButton.jsx
import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({isFavorite, toggleFavorite}) {
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
  <FavIcon isActive={isFavorite} onClick={toggleFavorite} />
      </div>
    </div>
  );
}

export default PhotoFavButton;