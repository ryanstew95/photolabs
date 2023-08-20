import React, { useState } from 'react';
import TopicList from '../components/TopicList';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';
import  photos  from '../mocks/photos';
import { topics } from '../mocks/topics';


const HomeRoute = ({ onPhotoClick, favorites }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicSelect = (topicSlug) => {
    console.log('Selected topic:', topicSlug);
    setSelectedTopic(topicSlug);
  };

  return (
    <div className="HomeRoute">
      <TopNavigationBar favorites={favorites} />
      <div className="content-container">
        <div className="nav-items">
         
          <TopicList topics={topics} onTopicSelect={handleTopicSelect} />
        </div>
        <PhotoList photos={photos} 
        selectedTopic={selectedTopic}
        onPhotoClick={onPhotoClick}
        />
      </div>
    </div>
  );
};

export default HomeRoute;
