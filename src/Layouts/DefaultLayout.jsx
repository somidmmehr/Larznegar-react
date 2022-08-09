import { Layout } from 'antd';
import React from 'react';
import MenuBar from "../Components/MenuBar/MenuBar";
const { Header, Content, Footer } = Layout;

const DefaultLayout = ({ children }) => (
    <Layout>
        <Header
            style={{
                position: 'fixed',
                zIndex: 1,
                width: '100%',
            }}
        >
            <div className="logo" />
            <MenuBar />
        </Header>
        <Content
            className="site-layout"
            style={{
                padding: '0 50px',
                marginTop: 64,
            }}
        >
            { children }
        </Content>
        <Footer
            style={{
                textAlign: 'center',
            }}
        >
            Ant Design ©2018 Created by Ant UED
        </Footer>
    </Layout>
);

export default DefaultLayout;