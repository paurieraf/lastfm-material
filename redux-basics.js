const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    favouriteArtists: []
}

// Reducer
const rootReducer = (state = initialState, action) => {
    return state;
};

// Store
const store = createStore(rootReducer);
console.log('STORE', store.getState());

// Dispatching Action
store.dispatch({ type: 'SET_FAVOURITE_ARTISTS'});
store.dispatch({ type: 'SET_FAVOURITE_ALBUMS'});
store.dispatch({ type: 'SET_FAVOURITE_TRACKS'});
console.log('STORE', store.getState());


// Subscription
