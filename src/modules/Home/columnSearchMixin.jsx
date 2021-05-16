import { Input, Space, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export default function columnSearchMixin(dataIndex) {
    return {
        filterDropdown: function SearchInput({
                                                 setSelectedKeys,
                                                 selectedKeys,
                                                 confirm,
                                                 clearFilters,
                                             }) {
            return (
                <div style={{ padding: 8 }}>
                    <Input
                        placeholder="Search"
                        value={selectedKeys[0]}
                        onChange={(e) =>
                            setSelectedKeys(e.target.value ? [e.target.value] : [])
                        }
                        onPressEnter={() => {
                            confirm();
                        }}
                        style={{ width: 188, marginBottom: 8, display: 'block' }}
                    />
                    <Space>
                        <Button
                            type="primary"
                            onClick={() => {
                                confirm();
                            }}
                            icon={<SearchOutlined />}
                            size="small"
                            style={{ width: 90 }}
                        >
                            Search
                        </Button>
                        <Button
                            onClick={() => {
                                if (clearFilters) {
                                    clearFilters();
                                }
                            }}
                            size="small"
                            style={{ width: 90 }}
                        >
                            Reset
                        </Button>
                    </Space>
                </div>
            );
        },
        filterIcon: function SearchIcon(filtered) {
            return (
                <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
            );
        },
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex]
                    .toString()
                    .toLowerCase()
                    .includes(value.toLowerCase())
                : '',
    };
}
