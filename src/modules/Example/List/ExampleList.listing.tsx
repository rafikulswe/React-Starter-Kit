import React, { FC } from 'react'
import AntTable from '../../../components/Table/AntTable';
import { ExampleAction } from '../Actions/Example.actions';
import { CommonUtils, DateTimeUtils } from '../../../utils';
import ViewAction from '../../../components/Actions/ViewAction';
import ListItemAction from '../../../components/Actions/ListItemAction';
import ModalAction from '../../../components/Actions/ModalAction';
import { ModalFormType } from '../ModalFormType.enum';

const ExampleListing: FC<any> = props => {
    const { loading, listData, selectedRowKeys, onChangeSwitchToggle, handleOnChanged, handleTableChange, handleCallbackFunc } = props;
    const columns = [
        {
            dataIndex: "title",
            key: 'title',
            title: "Title",
            sorter: true,
            width: '20%',
            render: (text: string, record: any, index: number) => <ViewAction entityId={record.id} actionItem={ExampleAction.COMMON_ACTION.VIEW} defaultViewText={text} handleCallbackFunc={handleCallbackFunc}><span className="font-bold">{text}</span></ViewAction>,
        },
        {
            dataIndex: "description",
            key: 'description',
            title: "Description",
            sorter: true,
            width: '35%',
        },
        {
            dataIndex: "created_at",
            key: 'created_at',
            title: "Created Time",
            sorter: true,
            width: '25%',
            render: (value: any) => DateTimeUtils.formatDateTimeA(value),
        },
        // {
        //     dataIndex: "status",
        //     key: 'status',
        //     title: "Status",
        //     sorter: true,
        //     width: '10%',
        //     render: (text: string, record: any, index: number) => CommonUtils.displaySwitchToggleBtn(record, record.status, onChangeSwitchToggle)
        // },
        {
            dataIndex: "status",
            key: 'status',
            title: "Status",
            sorter: true,
            width: '10%',
            render: (text: number, record: any, index: number) => {
                return (
                    <ModalAction
                        entityId={record.id}
                        className={'px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'}
                        btnText={'Status'}
                        actionItem={ExampleAction.COMMON_ACTION.UPDATE_EXAMPLE_STATUS}
                        modalNameList={ModalFormType}
                        whichModal={ModalFormType.UPDATE_EXAMPLE_STATUS}
                        handleCallbackFunc={handleCallbackFunc}
                        enablePermission={true}
                    />
                );
            }
        },
        {
            dataIndex: 'action',
            key: 'action',
            title: 'Action',
            width: '10%',
            align: 'center',
            render: (text: string, record: any, index: number) => <ListItemAction entityId={record.id} actionList={ExampleAction.LIST_ITEM_ACTION} handleCallbackFunc={handleCallbackFunc} />,
        },
    ];

    return (
        <div className="border border-gray rounded-md">
            <AntTable
                className="table-auto"
                rowSelection={true}
                rowSelectionPermission="auth:example:multiSelect"
                selectedRowKeys={selectedRowKeys}
                dataSource={listData}
                columns={columns}
                loading={loading}
                handleOnChanged={handleOnChanged}
                onChange={handleTableChange}
            />
        </div>
    );
}

export default React.memo(ExampleListing);