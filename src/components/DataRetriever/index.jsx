import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "stateManager";
import {retrieveGames, retrieveReviews, retrieveUsers, retrieveCategories} from './actions';

const DataRetriever = ({ children }) => {
    const dispatch = useDispatch();
    const usersLoading = useSelector(retrieveUsers.loadingSelector);
    const gamesLoading = useSelector(retrieveGames.loadingSelector);
    const categoriesLoading = useSelector(retrieveCategories.loadingSelector);
    const reviewsLoading = useSelector(retrieveReviews.loadingSelector);
    const [display, setDisplayPage] = useState(false);

    useEffect(() => {
        dispatch(retrieveUsers({}));
        dispatch(retrieveGames({}));
        dispatch(retrieveCategories({}));
        dispatch(retrieveReviews({}));

        setDisplayPage(true);
    }, [dispatch]);

    const loading = usersLoading || gamesLoading || categoriesLoading || reviewsLoading;

    return !display && loading ? 'Loading...' : <>{children}</>
}

export default DataRetriever;
