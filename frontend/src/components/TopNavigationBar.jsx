import React from 'react';
import { useFavContext } from './FavContext';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = () => {
  const { favorites } = useFavContext();

  return (
    <div className="top-nav-bar">
      <span className={`top-nav-bar__logo ${favorites.length > 0 ? 'liked' : ''}`}>PhotoLabs</span>
      <span className={`favourite-icon ${favorites.length > 0 ? 'liked' : ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 24 19" fill={favorites.length > 0 ? '#C80000' : '#EEEEEE'} className={`bi bi-heart ${favorites.length > 0 ? 'liked' : ''}`} role="img">
          <path fillRule="evenodd" d="M12 21.35l-1.45-1.32C5.4 16.36 2 13.11 2 9.19 2 5.76 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C15.09 3.81 16.76 3 18.5 3 21.58 3 24 5.76 24 9.19c0 3.92-3.4 7.17-8.55 10.84L12 21.35z"/>
        </svg>
        {favorites.length > 0 && (
          <span className="favourite-notification">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#FFFF00" className="bi bi-circle" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" />
            </svg>
          </span>
        )}
      </span>
      <span className="like-count">{favorites.length}</span>
    </div>
  );
};

export default TopNavigationBar;
