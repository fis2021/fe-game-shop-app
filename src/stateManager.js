import StateManager from 'redux-state-manager';

const stateManager = new StateManager({
    apiUrl: 'http://0.0.0.0:8000/api/',
    initialState: {
        testing: {0: {name: 'John Doe'}}
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
