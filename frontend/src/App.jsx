import React, { useState } from 'react';
import TopicList from './components/TopicList';
import PhotoList from './components/PhotoList';

import './App.scss';

const App = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicSelect = (topicSlug) => {
    console.log('Selected topic:', topicSlug);
    setSelectedTopic(topicSlug);
  };

  return (
    <div className="App">
    <TopicList onTopicSelect={handleTopicSelect} />
      <PhotoList selectedTopic={selectedTopic} />
    </div>
  );
};

export default App;
