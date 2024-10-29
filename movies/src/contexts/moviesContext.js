import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {

    const [favorites, setFavorites] = useState( [] )
    const [myReviews, setMyReviews] = useState( {} ) // store reviews in context
    const [myWatchList, setWatchList] = useState([])

    const addToWatchList = (movie) => {
        let newMustWatchList = [];
        if (!myWatchList.includes(movie.id)){
            newMustWatchList = [...myWatchList, movie.id];
        }
        else
        {
            newMustWatchList = [...myWatchList];
        }
        setWatchList(newMustWatchList)
    }

    const addReview = (movie, review) => {
        setMyReviews( {...myReviews, [movie.id]: review } )
    };

    const addToFavorites = (movie) => {
        let newFavorites = [];
        if (!favorites.includes(movie.id)){
            newFavorites = [...favorites, movie.id];
        }
        else
        {
            newFavorites = [...favorites];
        }
        setFavorites(newFavorites)
    };

    const removeFromFavorites = (movie) => {
        setFavorites( favorites.filter(
            (mId) => mId !== movie.id
        ) )
    };

    return (
        <MoviesContext.Provider
            value={{
                favorites,
                addToFavorites,
                removeFromFavorites,
                addReview,
                addToWatchList
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );

};

export default MoviesContextProvider;