import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router';
import {makeGETRequest} from '../../../api';
import {ImageCard} from '../../common-components';
import './movieRecomendations.css';

const MovieRecomendations = () => {
    const {movieId} = useParams();
    const dispatch = useDispatch();
    const movieRecomendations = useSelector((store) => store.movieRecomendations?.results);

    const setMovieRecomendations = (recomendations) => {
        dispatch({type: 'SET_MOVIE_RECOMENDATIONS', payload: recomendations});
    };

    useEffect(() => {
        makeGETRequest('movieRecommendations', {}, {movieId}).then((response) => {
            return response.json();
        }).then((response) => {
            setMovieRecomendations(response);
        });
    }, []);

    const renderRecomendationsList = () => {
        const slicedList = movieRecomendations.slice(0, 3);
        return slicedList.map((recomendation) => {
            const {id, title, backdrop_path, vote_average = 0} = recomendation;
            return (<ImageCard
                key={id}
                imageSrc={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                width="348px"
                height="174px"
                altText={title}
                mainTitle={title}
                subMainTitle={`${vote_average * 10}%`}
            />);
        });
    };

    if (movieRecomendations?.length) {
        return (
            <div className="movie_recomendations_section">
                <div className="movie_recomendations_title">Recomendations</div>
                <div className="movie_recomendations_list">
                    {renderRecomendationsList()}
                </div>
            </div>
        );
    }

    return null;
};

export default MovieRecomendations;