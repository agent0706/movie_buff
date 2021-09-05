import React from 'react';
import {useSelector} from 'react-redux';
import './movieBackDropCard.css';

const MovieBackDropCard = () => {
    const movieDetails = useSelector((store) => store.selectedMovieDetails);
    const {
        backdrop_path,
        title,
        release_date,
        genres = [],
        runtime,
        vote_average
    } = movieDetails || {};

    const getHighlights = () => {
        const highlights = [];
        
        const getDate = () => {
            if (release_date) {
                const releaseDate = new Date(release_date);
                let month = releaseDate.getMonth() + 1;
                const year = releaseDate.getFullYear();
                let date = releaseDate.getDate();
                if (date < 10) {
                    date = '0' + date;
                }
                if (month < 10) {
                    month = '0' + month;
                }
                highlights.push(`${month}/${date}/${year}`);
            }
        };
        
        const getGenres = () => {
            const genreNames = genres.map((genere) => genere.name) || [];
            highlights.push(genreNames.join(', '));
        };

        const getRunTime = () => {
            if (runtime) {
                const hours = Math.floor(runtime / 60);
                const minutes = runtime - (hours * 60);
                let movieRunTimeString = '';
                if (hours > 0) {
                    movieRunTimeString += `${hours}h `;
                }
                if (minutes > 0) {
                    movieRunTimeString += `${minutes}m`
                }
                highlights.push(movieRunTimeString);
            }
        }

        getDate();
        getGenres();
        getRunTime();
        return highlights.join(' | ');
    };

    return (
        <div className="movie_backdrop_card" style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${backdrop_path}")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%'
        }}>
            <div className="movie_backdrop_contents">
                <div>
                    <div className="movie_title">{title}</div>
                    <div className="movie_highlights">{getHighlights()}</div>
                </div>
                {!!vote_average && <div className="movie_user_score_section">
                    <div className="movie_user_score_label">User<br />Score</div>
                    <div className="movie_user_score">{vote_average && `${vote_average * 10}%`}</div>
                </div>}
            </div>
        </div>
    );
};

export default MovieBackDropCard;