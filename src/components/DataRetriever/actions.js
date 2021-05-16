import { apiManager } from "stateManager";

export const retrieveGames = apiManager.createJsonRequest('RETRIEVE_GAMES', {
    path: '/games',
    method: 'GET',
    successReducer: (state, result) => {
        state.games = result;
    },
});

export const retrieveUsers = apiManager.createJsonRequest('RETRIEVE_USERS', {
    path: '/users',
    method: 'GET',
    successReducer: (state, result) => {
        state.users = result;
    },
});

export const retrieveCategories = apiManager.createJsonRequest('RETRIEVE_CATEGORIES', {
    path: '/categories',
    method: 'GET',
    successReducer: (state, result) => {
        state.categories = result;
    },
});


export const retrieveReviews = apiManager.createJsonRequest('RETRIEVE_REVIEWS', {
    path: '/reviews',
    method: 'GET',
    successReducer: (state, result) => {
        state.reviews = result;
    },
});
