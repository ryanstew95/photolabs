import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({isFavorite, toggleFavorite}) {
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
  <FavIcon selected={isFavorite} onClick={() => toggleFavorite(id)} />
      </div>
    </div>
  );
}

export default PhotoFavButton;