import React from "react";
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, onPhotoClick }) => {
  return (
    <ul className="photo-list">
        {photos.map(photoData => (
        <PhotoListItem
          key={photoData.id}
          id={photoData.id}
          location={photoData.location}
          imageSource={photoData.urls.regular}
          username={photoData.user.name}
          profile={photoData.user.profile}
          onPhotoClick={onPhotoClick}
          photo={photoData}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
