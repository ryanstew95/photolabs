import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, onClick }) => {
  console.log('Received topic:', topic);
  return (
    <div className="topic-list__item" onClick={() => onClick(topic.slug)}>
      {topic.title}
    </div>
  );
};

export default TopicListItem;
