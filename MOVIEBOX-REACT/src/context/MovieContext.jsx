import { createContext, useContext, useEffect, useState } from "react";

export const MovieContext = createContext();

export const useMovieContext = () => {
  return useContext(MovieContext);
};

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFvrts = localStorage.getItem("favorites");
    if (storedFvrts) {
      setFavorites(JSON.parse(storedFvrts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFvrts = (movie) => {
    setFavorites((prev) => {
      if (prev.some((fav) => fav.id === movie.id)) {
        return prev;
      }
      return [...prev, movie];
    });
  };

  const removeFromFvrts = (movieID) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieID));
  };

  const isFvrt = (movieID) => {
    return favorites.some((movie) => movie.id === movieID);
  };

  const value = {
    favorites,
    addToFvrts,
    removeFromFvrts,
    isFvrt,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
