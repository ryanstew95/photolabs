import React from 'react';
import { useFavContext } from './FavContext';
import '../styles/TopNavigationBar.scss'

const TopNavigationBar = () => {
  const { favorites } = useFavContext();

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      {favorites.length > 0 && <span className="favourite-notification">{favorites.length}</span>}
    </div>
    
  )
}

export default TopNavigationBar;