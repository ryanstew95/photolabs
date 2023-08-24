import React from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';



const HomeRoute = ({ onPhotoClick, favorites, photos, topics, topicSelect }) => {

  return (
    <div className="HomeRoute">
      <TopNavigationBar favorites={favorites} topics={topics} topicSelect={topicSelect} />
      <div className="content-container">
        <div className="nav-items">
         
        
        </div>
        <PhotoList photos={photos} 
        onPhotoClick={onPhotoClick}
        />
      </div>
    </div>
  );
};

export default HomeRoute;
