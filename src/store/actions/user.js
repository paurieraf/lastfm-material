import * as actionTypes from './actionTypes';
import axios from 'axios';

// export const STORE_LOGGED_USER = 'STORE_LOGGED_USER';
// export const FETCH_LOGGED_USER = 'FETCH_LOGGED_USER';
// export const SET_LOGGED_USER = 'SET_LOGGED_USER';


export const storeLoggedUser = (loggedUser) => {
    return {
        type: actionTypes.STORE_LOGGED_USER,
        loggedUser: loggedUser
    };
};

export const fetchLoggedUser = () => {
    return dispatch => {
        axios.get('')
            .then(response => {
                dispatch(storeLoggedUser(response.data));
            }).catch(err => {
                dispatch(gfetch)
            })
    }
};

export const fetchLoggedUserFailed = () => {
    return {
        type: actionTypes.FETCH_LOGGED_USER_FAILED
    };
};