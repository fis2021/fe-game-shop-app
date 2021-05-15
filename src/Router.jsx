import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Auth from 'modules/Auth';

const Router = () => {
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
