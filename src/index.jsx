import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';

import './styles/index.scss';

import { getStore } from './stateManager';
import { StateProvider } from 'redux-state-manager';

ReactDOM.render(
    <StateProvider store={getStore()}>
        <Router />
    </StateProvider>,
  document.getElementById('root')
);
