import * as actionTypes from "./actionTypes";
import axios from 'axios';

export const storeFavouriteTracks = (favouriteTracks) => {
    return {
        type: actionTypes.STORE_FAVOURITE_TRACKS,
        favouriteTracks: favouriteTracks
    };
};

export const fetchFavouriteTracks = (username) => {
    return dispatch => {
        axios.get(
            process.env.REACT_APP_LASTFM_API_ROOT_URL
            + '?api_key=' + process.env.REACT_APP_LASTFM_API_KEY
            + '&format=json'
            + '&method=user.gettoptracks'
            + '&user=' + username
        ).then(response => {
            dispatch(storeFavouriteTracks(response.data));
        }).catch(err => {
            dispatch(fetchFavouriteTracksFailed());
        });
    };
};

export const fetchFavouriteTracksFailed = () => {
    return {
        type: actionTypes.FETCH_FAVOURITE_TRACKS_FAILED
    };
};

