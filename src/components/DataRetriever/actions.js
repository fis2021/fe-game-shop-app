import { apiManager } from "stateManager";
import {indexArray} from "../../services/indexArray";

export const retrieveGames = apiManager.createJsonRequest('RETRIEVE_GAMES', {
    path: '/games',
    method: 'GET',
    successReducer: (state, result) => {
        state.games = indexArray(result);
    },
});

export const retrieveUsers = apiManager.createJsonRequest('RETRIEVE_USERS', {
    path: '/users',
    method: 'GET',
    successReducer: (state, result) => {
        state.users = indexArray(result);
    },
});

export const retrieveCategories = apiManager.createJsonRequest('RETRIEVE_CATEGORIES', {
    path: '/categories',
    method: 'GET',
    successReducer: (state, result) => {
        state.categories = indexArray(result);
    },
});


export const retrieveReviews = apiManager.createJsonRequest('RETRIEVE_REVIEWS', {
    path: '/reviews',
    method: 'GET',
    successReducer: (state, result) => {
        state.reviews = indexArray(result);
    },
});
