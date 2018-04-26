import * as actionTypes from '../actions/actions';

const initialState = {
    favouriteArtists: []
}

const artistReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_FAVOURITE_ARTISTS:
            //TODO petició de favourite artists
            return {
                ...state,
                favouriteArtists: state.favouriteArtists.concat([])
            }
    }

    return state;
};

export default artistReducer;