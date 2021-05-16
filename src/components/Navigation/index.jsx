import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { AntDesignOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons/lib';
import { Menu } from 'antd';

import { useSelector, useDispatch } from 'stateManager';
import { logout } from 'modules/Auth/actions';

const { SubMenu } = Menu;

const Navigation = () => {
    const dispatch = useDispatch();
    const username = useSelector((state) => state.auth.username);
    const [menuKey, setMenuKey] = useState('home');

    return (
        <Menu onClick={(e) => setMenuKey(e.key)} selectedKeys={[menuKey]} mode="horizontal">
            <Menu.Item key="logo" icon={<AntDesignOutlined />}>
                <Link to="/">Game Shop</Link>
            </Menu.Item>
            <SubMenu key="SubMenu" icon={<UserOutlined />} title={username || 'Account'}>
                <Menu.ItemGroup title="Actions">
                    <Menu.Item key="SubMenu:1">Profile page</Menu.Item>
                    <Menu.Item key="SubMenu:2" onClick={() => dispatch(logout({}))}>Logout</Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>
        </Menu>
    );
};

export default Navigation;
