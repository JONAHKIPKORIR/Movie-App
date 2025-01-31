import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();
export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    //  Load favorites from localStorage during initial render
    const [favoritesMovies, setFavoritesMovies] = useState(() => {
        try {
            const savedFavorites = localStorage.getItem("favoritesMovies");
            return savedFavorites ? JSON.parse(savedFavorites) : []; // Load from localStorage or set empty array
        } catch (error) {
            console.error("Error parsing favoritesMovies from localStorage:", error);
            return [];
        }
    });

    // Update localStorage whenever favoritesMovies changes
    useEffect(() => {
        try {
            localStorage.setItem("favoritesMovies", JSON.stringify(favoritesMovies));
        } catch (error) {
            console.error("Error saving favoritesMovies to localStorage:", error);
        }
    }, [favoritesMovies]);

    // Operations
    const addToFavorites = (movie) => {
        setFavoritesMovies((prev) => [...prev, movie]);
    };

    const removeFromFavorites = (movieId) => {
        setFavoritesMovies((prev) => prev.filter((movie) => movie.id !== movieId));
    };

    const isFavorite = (movieId) => {
        return favoritesMovies.some((movie) => movie.id === movieId);
    };

    const value = {
        favoritesMovies,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
    };

    return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};
