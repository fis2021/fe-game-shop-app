import { Typography, Row, Col } from 'antd';

import LoginForm from './LoginForm';


const Auth = () => {

    return <div className="auth">
        <div  className="auth__wrapper">
            <Row align={'center'}>
                <Typography.Title level={2}>Welcome to the best budget game shop ever</Typography.Title>
            </Row>
            <Row align={'center'}>
                <Col span={7}>

                    <Typography.Title level={4}>
                        Please enter your credentials
                    </Typography.Title>
                    <br />
                    <LoginForm />
                </Col>
            </Row>
        </div>
    </div>
}

export default Auth;
