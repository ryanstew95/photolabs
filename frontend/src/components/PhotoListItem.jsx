import React from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoListItem.scss";
import "../styles/PhotoFavButton.scss";

const PhotoListItem = ({ id, location, imageSource, username, profile }) => {
  const handleFavIconClick = () => {
    console.log("FavIcon clicked!");
    // Add your logic here to handle the click event, such as toggling favorite status.
  };
  return (
    <div className="photo-list-item">

      <img className="photo-list__image" src={imageSource} alt={`Photo by ${username}`} />
      

      <div className="photo-list__user-info">
      <FavIcon className="photo-list__fav-icon" onClick={handleFavIconClick} />
        <div className="user-info">
          {/* profile picture */}
          <img className="photo-list__user-profile" src={profile} alt={`Profile of ${username}`} />
        </div>
                {/* username */}
                <div className="photo-list__user-details">{username}</div>
        {/* location */}
        <div className="photo-list__user-location">{`${location.city}, ${location.country}`}</div>
        
      </div>
    </div>
  );
};

export default PhotoListItem;