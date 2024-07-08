import React, { FC } from 'react'
import { ExampleAction } from "../Actions/Example.actions";
import EditAction from '../../../components/Actions/EditAction';
import DeleteAction from '../../../components/Actions/DeleteAction';
import { StatusEnum } from '../../../utils/enums';
import { DateTimeUtils } from '../../../utils';

const ExampleView: FC<any> = props => {

    const { itemData, handleCallbackFunc } = props;
    return (
        <>
            <div className='mb-5'>
                <EditAction entityId={itemData.id} actionItem={ExampleAction.COMMON_ACTION.EDIT} handleCallbackFunc={handleCallbackFunc} />
                <DeleteAction entityId={itemData.id} actionItem={ExampleAction.COMMON_ACTION.DELETE} handleCallbackFunc={handleCallbackFunc} />
            </div>
            <div className='relative overflow-x-auto'>
                <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                    <tr className='bg-white border-b'>
                        <td width={'20%'}>Title</td>
                        <td width={'5%'}>:</td>
                        <td width={'75%'}>{itemData.title}</td>
                    </tr>
                    <tr className='bg-white border-b'>
                        <td width={'20%'}>Description</td>
                        <td width={'5%'}>:</td>
                        <td width={'75%'}>{itemData.description}</td>
                    </tr>
                    <tr className='bg-white border-b'>
                        <td width={'20%'}>Status</td>
                        <td width={'5%'}>:</td>
                        <td width={'75%'}>{StatusEnum[itemData.status]}</td>
                    </tr>
                    <tr className='bg-white border-b'>
                        <td width={'20%'}>Created Time</td>
                        <td width={'5%'}>:</td>
                        <td width={'75%'}>{DateTimeUtils.formatDateTimeA(itemData.created_at)}</td>
                    </tr>
                    <tr className='bg-white border-b'>
                        <td width={'20%'}>Updated Time</td>
                        <td width={'5%'}>:</td>
                        <td width={'75%'}>{DateTimeUtils.formatDateTimeA(itemData.updated_at)}</td>
                    </tr>
                </table>
            </div>
        </>

    );
}
export default React.memo(ExampleView);