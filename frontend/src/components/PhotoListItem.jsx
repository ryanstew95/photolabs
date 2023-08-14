import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ id, location, imageSource, username, profile }) => {
  return (
    <div className="photo-list-item">
      <img className="photo" src={imageSource} alt={`Photo by ${username}`} />

      <div className="info">
        <div className="user-info">
          <img className="profile-pic" src={profile} alt={`Profile of ${username}`} />
          <div className="username">{username}</div>
        </div>
        <div className="location">{`${location.city}, ${location.country}`}</div>
      </div>
    </div>
  );
};

export default PhotoListItem;