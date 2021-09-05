import React from 'react';
import {useHistory} from 'react-router';
import './header.css';

const Header = () => {
    const history = useHistory();

    const handleTitleClick = () => {
        history.push('/');
    };

    return (
        <div className="header">
            <span className="header_title" onClick={handleTitleClick}>MovieBuff</span>
            <div className="header_options">
                <span className="header_option">Movies</span>
                <span className="header_option">Tv shows</span>
                <span className="header_option">kids</span>
            </div>
        </div>
    )
};

export default Header;