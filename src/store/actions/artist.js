import * as actionTypes from "./actionTypes";
import axios from 'axios';


export const fetchFavouriteArtists = (username) => {
    return dispatch => {
        axios.get(
            process.env.REACT_APP_LASTFM_API_ROOT_URL
            + '?api_key=' + process.env.REACT_APP_LASTFM_API_KEY
            + '&format=json'
            + '&method=user.gettopartists'
            + '&user=' + username
        ).then(response => {
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
export const storeFavouriteArtists = (favouriteArtists) => {
    return {
        type: actionTypes.STORE_FAVOURITE_ARTISTS,
        favouriteArtists: favouriteArtists
    };
};


export const fetchArtistInfo = (artistMbid) => {
    return dispatch => {
        axios.get(
            process.env.REACT_APP_LASTFM_API_ROOT_URL
            + '?api_key=' + process.env.REACT_APP_LASTFM_API_KEY
            + '&format=json'
            + '&method=artist.getInfo'
            + '&mbid=' + artistMbid
        ).then(response => {
            dispatch(storeFavouriteArtists(response.data));
        }).catch(err => {
            dispatch(fetchFavouriteArtistsFailed());
        });
    };
};
export const fetchArtistInfoFailed = () => {
    return {
        type: actionTypes.FETCH_ARTIST_INFO_FAILED
    };
};
export const storeCurrentArtist = (currentArtist) => {
    return {
        type: actionTypes.STORE_CURRENT_ARTIST,
        currentArtist: currentArtist
    };
};

