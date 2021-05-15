import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

const Router = () => {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/">
                My app
            </Route>

            <Redirect to="/" />
        </Switch>
    </BrowserRouter>
};

export default Router;
