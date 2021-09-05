import React from 'react';
import {useSelector} from 'react-redux';
import SearchArea from './searchArea';
import MovieList from './moveList';
import './main.css';

const MainComponent = () => {
    const currentSearchString = useSelector((store) => store.searchString);

    const getSectionTitle = () => {
        if (currentSearchString?.length) {
            return <span>Showing search results for <b>'{currentSearchString}'</b></span>
        }
        return <span>Browse movies by category</span>
    };

    return (
        <>
            <SearchArea />
            <div className="section_title">
                {getSectionTitle()}
            </div>
            <MovieList />
        </>
    );
};

export default MainComponent;