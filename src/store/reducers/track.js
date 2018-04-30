import * as actionTypes from '../actions/actionTypes';

const initialState = {
    favouriteTracks: null,
    error: false
}

const trackReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_FAVOURITE_TRACKS:
            return {
                ...state,
                favouriteTracks: action.favouriteTracks,
                error: false
            };
        case actionTypes.FETCH_FAVOURITE_TRACKS_FAILED:
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
};

export default trackReducer;