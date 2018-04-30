import * as actionTypes from '../actions/actionTypes';

const initialState = {
    favouriteAlbums: null,
    error: false
}

const albumReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_FAVOURITE_ALBUMS:
            return {
                ...state,
                favouriteAlbums: action.favouriteAlbums,
                error: false
            };
        case actionTypes.FETCH_FAVOURITE_ALBUMS_FAILED:
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
};

export default albumReducer;