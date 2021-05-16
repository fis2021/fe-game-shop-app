import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

import { apiManager } from 'stateManager';

const loginReducer = (state, result) => {
    state.auth.token = result.token;
    const decodedToken = jwtDecode(result.token);

    state.auth = {
        token: result.token,
        ...decodedToken,
    };

    Cookies.set('authToken', result.token);
};

export const login = apiManager.createJsonRequest('LOGIN', {
    path: '/auth/get-token/',
    method: 'POST',
    successReducer: loginReducer,
});

export const logout = apiManager.createJsonRequest('LOGOUT', {
    path: '/logout',
    method: 'GET',
    startReducer: (state) => {
        state.auth = {};
        Cookies.remove('authToken');
    },
    successReducer: () => {},
});
