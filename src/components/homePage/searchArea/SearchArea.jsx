import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import './SearchArea.css';

const SearchArea = () => {

    const [currentSearchString, updateSearchString] = useState('');
    const dispatch = useDispatch();

    const setSearchString = (searchString) => {
        dispatch({type: 'SET_SEARCH_STRING', payload: searchString});
    };
    
    const handleSearchButtonClick = () => {
        setSearchString(currentSearchString);
    };

    return (
        <div className="search_area">
            <span className="search_bar_title">Find perfect movie for <b>evening</b></span>
            <div className="search_bar">
                <input
                    className="input_box"
                    placeholder="Search movies"
                    onChange={(event) => updateSearchString(event.target.value)}
                />
                <div className="search_button" onClick={handleSearchButtonClick}>
                    <span className="searh_button_text">Search</span>
                </div>
            </div>
        </div>
    )
};

export default SearchArea;
