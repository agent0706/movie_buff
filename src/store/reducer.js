const initalState ={};

const reducer = (state = initalState, action) => {
    const {type, payload} = action;
    switch(type) {
        case 'SET_MOVIES': {
            const newState = {
                ...state,
                moviesList: payload
            };
            return newState;
        }
        case 'SET_SEARCH_STRING': {
            const newState = {
                ...state,
                searchString: payload
            };
            if (!payload.length) {
                newState.searchResults = [];
            }
            return newState;
        }
        case 'SET_SEARCH_RESULTS': {
            const newState = {
                ...state,
                searchResults: payload
            };
            return newState;
        }
        case 'SET_SELECTED_MOVIE_DETAILS': {
            const newState = {
                ...state,
                selectedMovieDetails: payload
            };
            return newState;
        }
        case 'SET_SELECTED_MOVIE_CREDITS': {
            const newState = {
                ...state,
                selectedMovieCredits: payload
            };
            return newState;
        }
        case 'SET_MOVIE_RECOMENDATIONS': {
            const newState = {
                ...state,
                movieRecomendations: payload
            };
            return newState;
        }
        default:
            return state;
    };
};

export default reducer;