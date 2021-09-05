import React from 'react';
import {useHistory} from 'react-router';
import {ImageCard} from '../../common-components';
import './movies.css';

const MovieCard = (props) => {
    const {movieDetails} = props;
    const {title, release_date, poster_path, id} = movieDetails;

    const history = useHistory();

    const getFromDate = () => {
        if (!release_date.length) {
            return "";
        }
        const releaseDate = new Date(release_date);
        let date = releaseDate.getDate();
        const year = releaseDate.getFullYear();
        const month = new Intl.DateTimeFormat('en-us', {month: 'short'}).format(releaseDate);
        if (date < 10) {
            date = '0' + date;
        }
        return `${month} ${date}, ${year}`;
    };

    const handleMovieSelection = () => {
        history.push(`/movie-details/${id}`)
    }

    return (
        <ImageCard
            imageSrc={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            width="256px"
            height="380px"
            altText={title}
            imageClickHandler={handleMovieSelection}
            mainTitle={title}
            subTitle={getFromDate()}
        />
    )
};

export default MovieCard;