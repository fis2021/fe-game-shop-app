import { Table } from "antd";
import { useSelector } from "stateManager";
import columnSearchMixin from "./columnSearchMixin";

const GameTable = () => {
    const games = useSelector(state => state.games);
    const categories = useSelector(state => state.categories);

    return <Table dataSource={games} columns={[
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
                    const item = categories.find(el => el.id === id);
                    if (item) {
                        result.push(item);
                    }
                })
                return result.map(item => item.name).join(',');
            }
        }
    ]} />;
}

export default GameTable;
