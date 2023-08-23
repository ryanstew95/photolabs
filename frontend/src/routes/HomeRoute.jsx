import React, { useState } from 'react';
import TopicList from '../components/TopicList';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';
// import  photos  from '../mocks/photos';
// import { topics } from '../mocks/topics';


const HomeRoute = ({ onPhotoClick, favorites, photos, topics }) => {

  const [selectedTopic, setSelectedTopic] = useState(null);

console.log('app data:', photos, topics);
  const handleTopicSelect = (topicSlug) => {
    console.log('Selected topic:', topicSlug);
    setSelectedTopic(topicSlug);
    try {
 
      const response = fetch(`http://localhost:8001/api/topics/photos/${topicSlug}`);
      const data = response.json();
      
     
      setPhotoSelected(data.photos);
    } catch (error) {
      console.error('Error fetching photos for topic:', error);
    }
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
