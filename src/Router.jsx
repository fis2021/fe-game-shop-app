import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import {useSelector} from "stateManager";

import Auth from 'modules/Auth';
import Game from 'modules/Game';
import Home from 'modules/Home';
import Navigation from "./components/Navigation";
import AppLayout from "./components/AppLayout";
import DataRetriever from "./components/DataRetriever";

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

    const routing = (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/game/:id">
                <Game />
            </Route>
            <Redirect to="/" />
        </Switch>
    );

    return <BrowserRouter>
        <DataRetriever>
            <AppLayout menu={<Navigation />} content={routing} />
        </DataRetriever>
    </BrowserRouter>
};

export default Router;
