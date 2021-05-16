import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import {useSelector} from "stateManager";

import Auth from 'modules/Auth';
import Game from 'modules/Game';
import Home from 'modules/Home';

const Router = () => {
    const { token } = useSelector((state) => state.auth);

    if(!token) {
        return <BrowserRouter>
            <Switch>
                <Route path="/auth" component={Auth} />
                <Redirect to="/auth" />
            </Switch>
        </BrowserRouter>
    }

    return <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/game/:id">
                <Game />
            </Route>
            <Redirect to="/" />
        </Switch>
    </BrowserRouter>
};

export default Router;
