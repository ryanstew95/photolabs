import React from "react";
import { useFavContext } from "./FavContext";
import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import { useState } from "react";

const TopNavigationBar = ({ topics, topicSelect }) => {
  const { favorites } = useFavContext();
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  if (!darkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }

  return (
    <div className={`top-nav-bar ${darkMode ? 'dark-mode' : ''}`}>
      <span className={`top-nav-bar__logo ${favorites.length > 0 ? 'liked' : ''}`}>
        PhotoLabs
      </span>
      <TopicList topics={topics} topicSelect={topicSelect} />
      <FavBadge isFavPhotoExist={favorites.length > 0} />
      <button className="dark" onClick={toggleDarkMode}>
        🔦{darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <span className="like-count">{favorites.length}</span>
    </div>
  );
};

export default TopNavigationBar;
