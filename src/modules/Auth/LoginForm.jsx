import React from 'react';
import { useDispatch } from 'react-redux';

import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import {useSelector} from "stateManager";
import { login } from './actions';


const LoginForm = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const loading = useSelector(login.loadingSelector);

    return (
        <Form
            form={form}
            onFinish={() => {
                const data = form.getFieldsValue();

                dispatch(login(data));
            }}
        >
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input
                    prefix={<LockOutlined />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                    Log in
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;
