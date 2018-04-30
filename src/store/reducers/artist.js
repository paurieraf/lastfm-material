import * as actionTypes from '../actions/actionTypes';

const initialState = {
    favouriteArtists: null,
    currentArtist: null,
    error: false
}

const artistReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.FETCH_FAVOURITE_ARTISTS_FAILED:
            return {
                ...state,
                error: true
            };
        case actionTypes.STORE_FAVOURITE_ARTISTS:
            return {
                ...state,
                favouriteArtists: action.favouriteArtists,
                error: false
            };
        case actionTypes.FETCH_ARTIST_INFO_FAILED:
            return {
                ...state,
                error: true
            };
        case actionTypes.STORE_CURRENT_ARTIST:
            return {
                ...state,
                currentArtist: action.currentArtist,
                error: false
            };
        default:
            return state;
    }
};

export default artistReducer;