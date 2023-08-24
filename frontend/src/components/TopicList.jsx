import React from "react";
import TopicListItem from './TopicListItem';
import "../styles/TopicList.scss";

const TopicList = ({ topics, topicSelect }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
      <TopicListItem
      key={topic.id}
      topic={topic}
      onClick={topicSelect}
      />
      ))}
    </div>
  );
};

export default TopicList;
