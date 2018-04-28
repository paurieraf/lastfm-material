import * as actionTypes from './actionTypes';
import axios from 'axios';


export const storeLoggedUser = (loggedUser) => {

    if (loggedUser.error) {
        return dispatch => {
            dispatch(fetchLoggedUserFailed());
        }
    }
    return {
        type: actionTypes.STORE_LOGGED_USER,
        loggedUser: loggedUser
    };
};

export const fetchLoggedUser = (username) => {
    return dispatch => {
        axios.get(
            process.env.REACT_APP_LASTFM_API_ROOT_URL
            + '?api_key=' + process.env.REACT_APP_LASTFM_API_KEY
            + '&format=json'
            + '&method=user.getInfo'
            + '&user=' + username
        ).then(response => {
                dispatch(storeLoggedUser(response.data));
            }).catch(err => {
                dispatch(fetchLoggedUserFailed(err));
            });
        //dispatch(storeLoggedUser({ username: 'pau.riera' }));
    }
};

export const fetchLoggedUserFailed = () => {
    return {
        type: actionTypes.FETCH_LOGGED_USER_FAILED
    };
};