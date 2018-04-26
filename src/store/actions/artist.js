import * as actionTypes from "./actionTypes";
import axios from 'axios';

export const storeFavouriteArtists = (favouriteArtists) => {
    return {
        type: actionTypes.STORE_FAVOURITE_ARTISTS,
        favouriteArtists: favouriteArtists
    };
};

export const fetchFavouriteArtists = () => {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                dispatch(storeFavouriteArtists(response.data));
            }).catch(err => {
                dispatch(fetchFavouriteArtistsFailed());
            });
    };
};

export const fetchFavouriteArtistsFailed = () => {
    return {
        type: actionTypes.FETCH_FAVOURITE_ARTISTS_FAILED
    };
};

