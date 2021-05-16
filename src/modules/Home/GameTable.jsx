import { Table } from "antd";
import { useSelector } from "stateManager";
import columnSearchMixin from "./columnSearchMixin";
import {retrieveGames, retrieveUsers, retrieveCategories} from 'components/DataRetriever/actions'

const GameTable = () => {
    const games__complete = useSelector(retrieveGames.loadingSelector);
    const categories__complete = useSelector(retrieveCategories.loadingSelector);
    const users__complete = useSelector(retrieveUsers.loadingSelector);

    const games = useSelector(state => state.games);
    const categories = useSelector(state => state.categories);
    const users = useSelector(state => state.users);

    return <Table
        dataSource={Object.values(games)}
        loading={games__complete || categories__complete || users__complete}
        columns={[
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => (a.username > b.username ? 1 : -1),
            ...columnSearchMixin('username'),
        },
        {
            title: 'Category',
            render: (any, record) => {
                const result = [];
                record.categories.forEach(id => {
                    result.push(categories[record.id])
                })
                return result.map(item => item?.name).join(',');
            }
        },
        {
            title: 'Seller',
            render: (any, record) => {
                return users[record.seller]?.username;
            }
        }
    ]} />;
}

export default GameTable;
