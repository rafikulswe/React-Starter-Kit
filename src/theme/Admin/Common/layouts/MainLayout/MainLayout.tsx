import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './MainLayout.scss';
import { Layout } from 'antd';
import { Content, Footer } from 'antd/es/layout/layout';
import MainHeader from '../../components/Header/Header';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import Sider from 'antd/es/layout/Sider';

export const MainLayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Layout hasSider>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}
            >
                <LeftSidebar collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
            </Sider>
            <Layout
                style={{
                    position: 'relative',
                    left: collapsed ? '6%' : '15.5%', top: 0, bottom: 0
                }}
            >
                <MainHeader collapsed={collapsed} setCollapsed={setCollapsed} />
                <Content
                    style={{
                        margin: '10px 16px 0',
                        padding: 24,
                        minHeight: 280,
                        background: 'white',
                        overflow: 'initial',
                        width: collapsed ? '92%' : '83%',
                    }}
                >
                    <Outlet />
                </Content>

                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    )
}
