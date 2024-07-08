import React, { FC, useEffect, useState } from "react";
import { Menu, MenuProps } from 'antd';
// import companyLogo from '../../../../../assets/images/company-logo.png';
import { LeftSidebarMenu } from "./LeftSidebar.menu";
import { Link } from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    permission: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        permission,
        children,
        label,
        type,
    } as MenuItem;
};

const LeftSidebar: FC<any> = props => {
    const { collapsed } = props;
    // const { isPermissionLoaded, hasPermission } = usePermissionContext();
    const [navigationList, setNavigationList] = useState<any>([]);
    const items: MenuProps['items'] = navigationList;

    useEffect(() => {
        let newSidebarMenuList: any[] = [];
        LeftSidebarMenu.map((item: any, index: number) => {
            let obj = getItem(
                item.label,
                item.key,
                item.permission,
                item.icon,
                item.children,
                item.type,
            )
            newSidebarMenuList.push(obj);
        });
        setNavigationList(newSidebarMenuList);
    }, [LeftSidebarMenu]);

    // const onClick: MenuProps['onClick'] = (e) => {
    //     console.log('click ', e);
    // };

    return (
        <>
            <div className="logo" style={{ height: 32, margin: 16 }}>
                <Link to='/' className="company-logo-link">
                    <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block mb-3"
                    >
                        <rect x="0.464294" width="24" height="24" rx="4.8" fill="#1890FF" />
                        <path
                            d="M14.8643 3.6001H20.8643V9.6001H14.8643V3.6001Z"
                            fill="white"
                        />
                        <path
                            d="M10.0643 9.6001H14.8643V14.4001H10.0643V9.6001Z"
                            fill="white"
                        />
                        <path
                            d="M4.06427 13.2001H11.2643V20.4001H4.06427V13.2001Z"
                            fill="white"
                        />
                    </svg>
                    <span className="text-lg text-white ms-2">Ant Admin</span>
                    {/* <img src={companyLogo} alt="Company Logo" /> */}
                </Link>
            </div>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                items={items}
            />
        </>
    )

}

export default LeftSidebar;