export const GET_FAVOURITE_ARTISTS = 'GET_FAVOURITE_ARTISTS';

export const getFavouriteArtists = (value) => {
    console.log('ACTIONS_VALUE', value);

    return {
        type: GET_FAVOURITE_ARTISTS,
        val: value
    };
};