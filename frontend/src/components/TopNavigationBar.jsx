import React from "react";
import { useFavContext } from "./FavContext";
import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigationBar = ({ topics, topicSelect }) => {
  const { favorites } = useFavContext();

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} topicSelect={topicSelect} />
      <FavBadge isFavPhotoExist={favorites.length > 0} />

      <span className="like-count">{favorites.length}</span>
    </div>
  );
};

export default TopNavigationBar;
