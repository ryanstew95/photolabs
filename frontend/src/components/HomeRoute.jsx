import React, { useState } from 'react';
import TopicList from './TopicList';
import PhotoList from './PhotoList';
import TopNavigationBar from './TopNavigationBar';
import '../styles/HomeRoute.scss';
import FavBadge from './FavBadge';
import  photos  from '../mocks/photos';
import { topics } from '../mocks/topics';


const HomeRoute = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicSelect = (topicSlug) => {
    console.log('Selected topic:', topicSlug);
    setSelectedTopic(topicSlug);
  };

  return (
    <div className="HomeRoute">
      <TopNavigationBar />
      <div className="content-container">
        <div className="nav-items">
         
          <TopicList topics={topics} onTopicSelect={handleTopicSelect} />
        </div>
        <PhotoList photos={photos} selectedTopic={selectedTopic} />
      </div>
    </div>
  );
};

export default HomeRoute;
