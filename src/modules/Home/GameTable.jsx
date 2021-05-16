import { Table } from "antd";
import { useSelector } from "stateManager";

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
];


const GameTable = () => {
    const games = useSelector(state => state.games) || [];
    return <Table dataSource={games} columns={columns} />;
}

export default GameTable;
