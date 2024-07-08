import { FC } from "react";
import { Header } from 'antd/es/layout/layout';
import {
    DownOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import './Header.scss';
import { Button, Dropdown, MenuProps, Space, theme } from "antd";
import avaterProfile from '../../../../../assets/images/avater-profile.jpg';
import { Link } from "react-router-dom";

const MainHeader: FC<any> = props => {
    const { collapsed, setCollapsed } = props;

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const items: MenuProps['items'] = [
        {
            label: <div className="p-2 text-sm text-black-900">
                <div>Bonnie Green</div>
                <div className="font-medium truncate">name@flowbite.com</div>
            </div>,
            key: '0',
        },
        {
            type: 'divider',
        },
        {
            label: <Link to={'/admin/dashboard'} className="p-2 text-black-900">Dashboard</Link>,
            key: '1',
        },
        {
            label: <Link to={'/'} className="p-2 text-black-900">Setting</Link>,
            key: '2',
        },
        {
            type: 'divider',
        },
        {
            label: <Link to={'/auth/logout'} className="p-2 text-black-900">Logout</Link>,
            key: '3',
        },
    ];

    return (
        <Header
            // style={{
            //     display: "flex",
            //     justifyContent: "space-between",
            //     alignItems: "center",
            //     padding: "0px 20px",
            //     height: "48px",
            //     width: '85%',
            //     backgroundColor: "#FFF",
            // }}
            className={`flex justify-between bg-white ${collapsed ? 'w-11/12' : 'w-10/12'} px-5`}
        >
            <Button
                className="text-base my-4"
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
            />

            <Dropdown menu={{ items }} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <img className="w-10 h-10 rounded" src={avaterProfile} alt="Default avatar" />
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
        </Header>

        // <Header
        //     style={{
        //         padding: 0,
        //         background: colorBgContainer,
        //         position: 'fixed',
        //         top: 0,
        //         width: '85%',
        //     }}
        // >
        //     <Row>
        //         <Col span={12} className="float-start">
        //             <Button
        //                 type="text"
        //                 icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        //                 onClick={() => setCollapsed(!collapsed)}
        //                 style={{
        //                     fontSize: '16px',
        //                     width: 64,
        //                     height: 64,
        //                 }}
        //             />
        //         </Col>

        //         <Col span={12} className="float-end text-right">
        //             <Dropdown menu={{ items }} trigger={['click']}>
        //                 <a onClick={(e) => e.preventDefault()}>
        //                     <Space>
        //                         Click me
        //                         <DownOutlined />
        //                     </Space>
        //                 </a>
        //             </Dropdown>
        //         </Col>
        //     </Row>
        // </Header>
    );

}

export default MainHeader;