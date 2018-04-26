import * as actionTypes from '../actions/actionTypes';

const initialState = {
    favouriteArtists: null,
    error: false
}

const artistReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_FAVOURITE_ARTISTS:
            return {
                ...state,
                favouriteArtists: action.favouriteArtists,
                error: false
            };
        case actionTypes.FETCH_FAVOURITE_ARTISTS_FAILED:
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
};

export default artistReducer;