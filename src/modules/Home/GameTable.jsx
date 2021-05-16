import { Table } from "antd";
import { useSelector } from "stateManager";
import columnSearchMixin from "./columnSearchMixin";

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => (a.username > b.username ? 1 : -1),
        ...columnSearchMixin('username'),
    },
];


const GameTable = () => {
    const games = useSelector(state => state.games);
    return <Table dataSource={games} columns={columns} />;
}

export default GameTable;
