import { useParams } from 'react-router-dom'

import { Descriptions } from "antd";
import { useSelector } from "stateManager";
import { retrieveGames } from "components/DataRetriever/actions";

const Game = () => {
    const { id } = useParams();
    const loading = useSelector(retrieveGames.loadingSelector);
    const { name, categories, seller, description }  = useSelector(state => state.games[id]);

    const globalCategories = useSelector(state => Object.values(state.categories));
    const localCategories = globalCategories.filter(category => categories.includes(category.id));

    const sellerName = useSelector(state => state.users[seller].username);

    const reviews = useSelector(state => Object.values(state.reviews)).filter(rev => rev.game === parseInt(id, 10));
    const totalRating = reviews.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.rating;
    }, 0);
    const rating = totalRating / reviews.length;


    return loading ? 'Loading...' : <Descriptions title={ name } layout="vertical">
        <Descriptions.Item label="Category">
            { localCategories.map(category => category.name).join(',') }
        </Descriptions.Item>
        <Descriptions.Item label="Seller">{ sellerName }</Descriptions.Item>
        <Descriptions.Item label="Rating">{ rating }</Descriptions.Item>
        <Descriptions.Item label="Description">{ description }</Descriptions.Item>
    </Descriptions>
}

export default Game
