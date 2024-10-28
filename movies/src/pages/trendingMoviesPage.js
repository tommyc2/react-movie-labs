import React from "react";
import { getTrendingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import AddToWatchListIcon from "../components/cardIcons/addToWatchList";

const TrendingMoviesPage = (props) => {

    const {  data, error, isLoading, isError }  = useQuery('trending', getTrendingMovies)

    if (isLoading) { return <Spinner /> }
    if (isError) { return <h1>{error.message}</h1> }

    const movies = data.results;

    // Redundant, but necessary to avoid app crashing.
    const favorites = movies.filter(m => m.favorite)
    localStorage.setItem('favorites', JSON.stringify(favorites))
    const addToFavorites = (movieId) => true

    return (
        <PageTemplate
            title="Trending Movies"
            movies={movies}
            action={(movie) => {
                return (
                <>
                    <AddToFavoritesIcon movie={movie} />
                    <AddToWatchListIcon movie={movie}/>
                </>
                );
            }}
        />
    );
};

export default TrendingMoviesPage;

