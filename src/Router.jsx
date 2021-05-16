import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import {useSelector} from "stateManager";

import Auth from 'modules/Auth';

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
                <Auth />
            </Route>

            <Redirect to="/" />
        </Switch>
    </BrowserRouter>
};

export default Router;
