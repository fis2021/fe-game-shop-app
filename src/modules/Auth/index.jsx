import {useDispatch} from "stateManager";
import {useEffect} from "react";

import { login } from './actions';

const Auth = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(login({username: 'customer', password: '1234'}))
    }, [dispatch]);

    return <div>
        <h1>Auth</h1>

    </div>
}

export default Auth;
