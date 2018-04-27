import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loggedUser: null,
    error: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_LOGGED_USER:
            return {
                ...state,
                loggedUser: action.loggedUser,
                error: false
            };
        case actionTypes.FETCH_LOGGED_USER_FAILED:
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
};

export default userReducer;