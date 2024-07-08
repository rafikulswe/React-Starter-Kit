import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const LeftSidebarMenu = [
    {
        label: <Link to={'/admin/dashboard'}>Dashboard</Link>,
        key: 'menu1',
        permission: 'pos:admin:dashboard',
        icon: <MailOutlined />,
    },
    {
        label: 'Back Office Setup',
        key: 'sub1',
        permission: '',
        icon: <MailOutlined />,
        children: [
            {
                label: <Link to={'/admin/example'}>Example</Link>,
                key: 'example',
                permission: 'pos:admin:example',
                icon: null,
            },
            {
                label: 'Item 2',
                key: 'g2',
                permission: '',
                icon: null,
                children: [
                    {
                        label: <Link to={'/admin'}>Option 3</Link>,
                        key: '3',
                        permission: '',
                    },
                    {
                        label: <Link to={'/admin'}>Option 4</Link>,
                        key: '4',
                        permission: '',
                    },
                ],
                type: 'group',
            },
        ],
        type: null,
    },
    {
        label: 'Navigation Two',
        key: 'sub2',
        permission: '',
        icon: <AppstoreOutlined />,
        children: [
            {
                label: <Link to={'/admin'}>Option 5</Link>,
                key: '5',
                permission: '',
            },
            {
                label: <Link to={'/admin'}>Option 6</Link>,
                key: '6',
                permission: '',
            },
            {
                label: 'Submenu',
                key: 'sub3',
                permission: '',
                icon: null,
                children: [
                    {
                        label: <Link to={'/admin'}>Option 7</Link>,
                        key: '7',
                        permission: '',
                    },
                    {
                        label: <Link to={'/admin'}>Option 8</Link>,
                        key: '8',
                        permission: '',
                    },
                ],
            },
        ],
        type: null,
    },
    { type: 'divider' },
    {
        label: 'Group',
        key: 'grp',
        permission: '',
        icon: <SettingOutlined />,
        children: [
            {
                label: <Link to={'/admin'}>Option 13</Link>,
                key: '13',
                permission: '',
            },
            {
                label: <Link to={'/admin'}>Option 14</Link>,
                key: '14',
                permission: '',
            },
        ],
        type: 'group',
    },


    // {
    //     type: 'group',
    //     title: 'My Settings',
    //     icon: 'calendar-outline',
    //     class: '',
    //     expanded: true,
    //     hidden: false,
    //     children: [
    //         {
    //             type: 'item',
    //             title: 'My Profile',
    //             permission: 'auth:user:myAccount',
    //             link: { to: '/setting/my-account/my-profile', exactMatch: true, externalUrl: false, openInNewTab: false },
    //             icon: '',
    //             class: '',
    //             badge: '',
    //             badgeClass: '',
    //             hidden: false,
    //         },
    //         {
    //             type: 'item',
    //             title: 'My Settings',
    //             permission: 'auth:user:mySetting',
    //             link: { to: '/setting/my-account/my-setting', exactMatch: true, externalUrl: false, openInNewTab: false },
    //             icon: '',
    //             class: '',
    //             badge: '',
    //             badgeClass: '',
    //             hidden: false,
    //         },
    //         {
    //             type: 'item',
    //             title: 'My Social Accounts',
    //             permission: 'auth:user:mySetting',
    //             link: { to: '/setting/my-account/my-social-account', exactMatch: true, externalUrl: false, openInNewTab: false },
    //             icon: '',
    //             class: '',
    //             badge: '',
    //             badgeClass: '',
    //             hidden: false,
    //         },
    //         {
    //             type: 'item',
    //             title: 'Change Password',
    //             permission: 'auth:oauth:changePassword',
    //             link: { to: '/setting/my-account/change-password', exactMatch: true, externalUrl: false, openInNewTab: false },
    //             icon: '',
    //             class: '',
    //             badge: '',
    //             badgeClass: '',
    //             hidden: false,
    //         },
    //     ],
    // },
    // {
    //     type: 'group',
    //     title: 'Site Settings',
    //     icon: 'calendar-outline',
    //     class: '',
    //     expanded: true,
    //     hidden: false,
    //     children: [
    //         {
    //             type: 'item',
    //             title: 'General Configuration',
    //             permission: 'core:setting:generalConfiguration',
    //             link: { to: '/setting/general-setting/general-configuration', exactMatch: true, externalUrl: false, openInNewTab: false },
    //             icon: '',
    //             class: '',
    //             badge: '',
    //             badgeClass: '',
    //             hidden: false,
    //         },
    //         {
    //             type: 'item',
    //             title: 'Notifications',
    //             permission: 'core:setting:notification',
    //             link: { to: '/setting/general-setting/notification', exactMatch: true, externalUrl: false, openInNewTab: false },
    //             icon: '',
    //             class: '',
    //             badge: '',
    //             badgeClass: '',
    //             hidden: false,
    //         },
    //     ],
    // },
];



{/* <Sider trigger={null} collapsible collapsed={isCollapsed}
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
            }}
        >
            <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
            <div className="logo" style={{ height: 32, margin: 16 }}>
                <Link to='/' className="company-logo-link">
                    <img src={bgLogoImg} alt="Company Logo" style={{ maxHeight: '30px', marginRight: '10px' }} />
                    <h1 className="d-none d-md-inline-block" style={{ fontSize: '14px' }}>Assemble Code</h1>
                </Link>
            </div>

            <Menu
                className='mt-5'
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                items={navigationList}
            />

            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                {navigationList.map((item: any, index: number) => {
                    return (
                        <>
                            {item.children.length > 0 && (
                                <li key={index} className="nav-item">
                                    <a href="javascript:void(0)" className="nav-link align-middle px-0">{item.title}</a>

                                    <ul className="collapse show nav flex-column ms-1" id="submenu1">
                                        {item.children.map((childItem: any, childIndex: number) => (
                                            <li key={`setting-sub-nav-${index}-${childIndex}`} className="w-100">
                                                <NavLink to={childItem.link.to} className={'nav-link px-0'}>{childItem.title}</NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            )}
                        </>
                    )
                })}
            </ul>
        </Sider> */}