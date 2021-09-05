import React from 'react';
import {useSelector} from 'react-redux';
import {ImageCard} from '../../common-components';
import './movieCast.css';

const MovieCast = () => {
    const movieCast = useSelector((store) => store.selectedMovieCredits?.cast);

    const renderCastList = () => {
        const slicedList = movieCast.slice(0, 4);
        return slicedList.map((castMemeber) => {
            const {id, name, character, profile_path} = castMemeber;
            return (<ImageCard
                key={id}
                imageSrc={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                width="256px"
                height="322px"
                altText={name}
                mainTitle={name}
                subTitle={character}
            />);
        });
    };

    if (movieCast?.length) {
        return (
            <>
                <div className="horizontal_divider" />
                <div className="movie_cast_section">
                    <div className="movie_cast_title">Cast</div>
                    <div className="movie_cast_list">
                        {renderCastList()}
                    </div>
                </div>
            </>
        );
    }
    return null;
};

export default MovieCast;