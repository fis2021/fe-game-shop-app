import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import App from './App';

const Router = () => {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <App />
            </Route>

            <Redirect to="/" />
        </Switch>
    </BrowserRouter>
};

export default Router;
