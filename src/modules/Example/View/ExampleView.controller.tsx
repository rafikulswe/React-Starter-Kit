import React, { FC, useEffect } from 'react'
import ExampleView from './ExampleView.view';
import { ExampleApi } from '../../../api';
import { useCrudViewService } from '../../../hooks/crud/useCrudViewService';
import DrawerView from '../../../components/Drawer/DrawerView';

const initialState = {
    modalTitle: 'Example Info',
    itemData: {},
    loading: false,
    fields: {},
    message: {
        network_error: 'A network error occurred. Please try again later.'
    }
}

const ExampleViewController: FC<any> = props => {
    const { BaseCrudViewService, modalTitle, itemData, setItemData, loading, entityId, reloadView,
        isShowView, handleCallbackFunc } = useCrudViewService(ExampleApi, initialState, props);

    useEffect(() => {
        setItemData(initialState.itemData);
        if (entityId && isShowView) {
            loadData();
        }
    }, [entityId, reloadView])

    const loadData = (): Promise<any> => {
        return BaseCrudViewService.loadData();
    }

    return (
        <DrawerView
            loading={loading}
            reloadView={reloadView}
            isShowView={isShowView}
            modalTitle={modalTitle}
            itemData={itemData}
            component={ExampleView}
            handleCallbackFunc={handleCallbackFunc}
        />
    );
}

export default React.memo(ExampleViewController);
