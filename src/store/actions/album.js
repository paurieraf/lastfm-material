import * as actionTypes from "./actionTypes";
import axios from 'axios';

export const storeFavouriteAlbums = (favouriteAlbums) => {
    return {
        type: actionTypes.STORE_FAVOURITE_ALBUMS,
        favouriteAlbums: favouriteAlbums
    };
};

export const fetchFavouriteAlbums = (username) => {
    return dispatch => {
        axios.get(
            process.env.REACT_APP_LASTFM_API_ROOT_URL
            + '?api_key=' + process.env.REACT_APP_LASTFM_API_KEY
            + '&format=json'
            + '&method=user.gettopalbums'
            + '&user=' + username
        ).then(response => {
                dispatch(storeFavouriteAlbums(response.data));
            }).catch(err => {
                dispatch(fetchFavouriteAlbumsFailed());
            });
    };
};

export const fetchFavouriteAlbumsFailed = () => {
    return {
        type: actionTypes.FETCH_FAVOURITE_ALBUMS_FAILED
    };
};

