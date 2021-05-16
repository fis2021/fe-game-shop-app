import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

const AppLayout = ({menu, content}) => {
    return <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            {menu}
        </Header>
        <Content className="site-layout">
            <div className="site-layout__background">
                { content }
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Kriss & Narcis © 2021 | Built with style</Footer>
    </Layout>
}

export default AppLayout;
