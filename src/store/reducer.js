const initialState = {
    favouriteArtists: []
}

const reducer = (state = initialState, action) => {
    if (action.type === 'GET_FAVOURITE_ARTISTS') {
        return {
            ...state,
            //TODO petició de favourite artists
        }
    }

    return state;
};

export default reducer;