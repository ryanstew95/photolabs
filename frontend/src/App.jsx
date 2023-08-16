import React, { useState } from 'react';
import TopicList from './components/TopicList';
import PhotoList from './components/PhotoList';
import TopNavigationBar from './components/TopNavigationBar';
import './App.scss';
import FavBadge from 'components/FavBadge';

const App = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicSelect = (topicSlug) => {
    console.log('Selected topic:', topicSlug);
    setSelectedTopic(topicSlug);
  };

  return (
    <div className="App">
      <div className="nav-bar">
      <TopNavigationBar />
    <TopicList onTopicSelect={handleTopicSelect} />
    <FavBadge/>
 </div>
      <PhotoList selectedTopic={selectedTopic} />

    </div>
  );
};

export default App;
