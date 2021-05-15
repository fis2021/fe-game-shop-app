import StateManager from 'redux-state-manager';
import Cookies from 'js-cookie';

const authToken = Cookies.get('authToken');

const stateManager = new StateManager({
    apiUrl: 'http://0.0.0.0:8000/api',
    initialState: {
        testing: {
            auth: {
                token: authToken,
                user_id: 0,
                username: ''
            }
        }
    }
});

const { apiManager, socketManager } = stateManager.managers;
const { useSelector, useDispatch } = stateManager.hooks;
const getStore = stateManager.getStore.bind(stateManager);

export {
    apiManager,
    socketManager,
    useSelector,
    useDispatch,
    getStore
};
