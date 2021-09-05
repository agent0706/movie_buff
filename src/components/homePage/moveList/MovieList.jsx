import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {makeGETRequest} from '../../../api';
import MovieCard from './MovieCard';
import './movies.css';

const MovieList = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector((store) => store.searchString);
    const moviesList = useSelector((store) => store.moviesList?.results);
    const searchResults = useSelector((store) => store.searchResults?.results);

    const setSearchReults = (searchResults) => {
        dispatch({type: 'SET_SEARCH_RESULTS', payload: searchResults});
    };

    const setMoviesList = (moviesList) => {
        dispatch({type: 'SET_MOVIES', payload: moviesList});
    };

    useEffect(() => {
        if (searchTerm?.length) {
            makeGETRequest('searchMovies', {query: searchTerm}).then((response) => {
                return response.json();
            }).then((data) => {
                setSearchReults(data);
            });
        }
    }, [searchTerm]);

    useEffect(() => {
        makeGETRequest('discoverMovies').then((response) => {
            return response.json();
        }).then((data) => {
            setMoviesList(data);
        });
    }, []);

    const renderMoviesList = (list) => {
        return (
            <div className="movie_list">
                {list.map((movie) => <MovieCard movieDetails={movie} key={movie.id} />)}
            </div>
        );
    };

    if (searchTerm?.length) {
        if (searchResults?.length) {
            return renderMoviesList(searchResults);
        } else {
            return <div className="center_content">No search results</div>;
        }
    }

    if(!searchTerm?.length && moviesList?.length) {
        return renderMoviesList(moviesList);
    }

    return <div className="center_content">No movies in the list</div>;
};

export default MovieList;
