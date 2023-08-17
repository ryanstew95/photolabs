import React, { createContext, useContext, useState } from 'react';

const FavContext = createContext();

export function useFavContext() {
  return useContext(FavContext);
}

export function FavProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (photoId) => {
    if (favorites.includes(photoId)) {
      setFavorites(favorites.filter((id) => id !== photoId));
    } else {
      setFavorites([...favorites, photoId]);
    }
  };

  return (
    <FavContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavContext.Provider>
  );
}
