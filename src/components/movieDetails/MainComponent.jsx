import React, {useEffect} from 'react';
import {useParams} from 'react-router';
import {useDispatch} from 'react-redux';
import {makeGETRequest} from '../../api';
import MovieBackDropCard from './movieBackDropCard';
import MovieOverView from './movieOverView';
import MovieCast from './movieCast';
import MovieRecomendations from './movieRecomendations';

const MainComponent = () => {
    const {movieId} = useParams();
    const dispatch = useDispatch();

    const setSelectedMovieDetails = (selectedMovieDetails) => {
        dispatch({type: 'SET_SELECTED_MOVIE_DETAILS', payload: selectedMovieDetails});
    };

    const setSelectedMovieCredits = (selectedMovieCredits) => {
        dispatch({type: 'SET_SELECTED_MOVIE_CREDITS', payload: selectedMovieCredits});
    };
     
    useEffect(() => {
        makeGETRequest('movieDetails', {}, {movieId}).then((response) => {
            return response.json();
        }).then((response) => {
            setSelectedMovieDetails(response);
        });
        makeGETRequest('movieCredits', {}, {movieId}).then((response) => {
            return response.json();
        }).then((response) => {
            setSelectedMovieCredits(response);
        });
    }, []);

    return (
        <>
            <MovieBackDropCard />
            <MovieOverView />
            <MovieCast />
            <MovieRecomendations />
        </>
    );
};

export default MainComponent;