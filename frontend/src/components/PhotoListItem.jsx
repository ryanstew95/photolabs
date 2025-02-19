import React from "react";
import "../styles/PhotoListItem.scss";
import "../styles/PhotoFavButton.scss";
import { useFavContext } from "./FavContext";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ id, location, imageSource, username, profile, onPhotoClick, photo }) => {
  const { favorites, toggleFavorite } = useFavContext();
  const isFavorite = favorites.includes(id);

  return (
    <div className="photo-list-item">
   
      <PhotoFavButton isFavorite={isFavorite} toggleFavorite={() => toggleFavorite(id)} />
  
      <img
        className="photo-list__image"
        src={imageSource}
        alt={`Photo by ${username}`}
        onClick={() => {
          onPhotoClick(photo);
        }}
      />
     

      <div className="photo-list__user-info">
        <div className="user-info">
          <img
            className="photo-list__user-profile"
            src={profile}
            alt={`Profile of ${username}`}
          />
        </div>
        <div className="photo-list__user-details">{username}</div>
        <div className="photo-list__user-location">{`${location.city}, ${location.country}`}</div>
      </div>
    </div>
  );
};

export default PhotoListItem;
