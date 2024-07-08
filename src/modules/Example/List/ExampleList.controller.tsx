import { FC, useEffect } from 'react'
import ExampleListing from "./ExampleList.listing";
import ExampleListFilter from './ExampleList.filter';
import ExampleListPagination from './ExampleList.pagination';
import { ExampleApi } from '../../../api';
import { useLocation } from 'react-router-dom';
import { useCrudListService } from '../../../hooks/crud/useCrudListService';
import { Form } from 'antd';
import queryString from 'query-string';
import ExampleFormController from '../Form/ExampleForm.controller';
import ExampleViewController from '../View/ExampleView.controller';
import ExampleStatusFormController from '../Block/ExampleStatusForm.controller';
import { ModalFormType } from '../ModalFormType.enum';

const ExampleListData: any = [
    { 'id': 1, 'name': 'Example 1', 'description': 'Example 1 description', 'status': 1 },
    { 'id': 2, 'name': 'Example 2', 'description': 'Example 2 description', 'status': 1 },
    { 'id': 3, 'name': 'Example 3', 'description': 'Example 3 description', 'status': 1 },
    { 'id': 4, 'name': 'Example 4', 'description': 'Example 4 description', 'status': 1 },
    { 'id': 5, 'name': 'Example 5', 'description': 'Example 5 description', 'status': 1 },
];

const initialState = {
    search: '',
    entity: {},
    entityId: null,
    listData: [],
    modalFormType: {
        'UPDATE_EXAMPLE_STATUS': false,
    },
    filters: {
        status: '',
    },
    pagination: {
        currentPage: 1,
        pageSize: 10,
    },
    totalCount: 0,
    selectedRowKeys: [],
    sort: 'id desc',
    view: null,
    loading: false,
    isShowView: false,
    isShowForm: false,
    fields: {},
    bulkAction: {
        action: '',
        field: '',
        value: '',
        ids: [] as any,
    },
    message: {
        network_error: 'A network error occurred. Please try again later.',
        delete_success: 'Delete Example successfully.',
        delete_confirm_title: 'Delete Example',
        delete_confirm: 'Are you sure you want to delete this Example?',
        delete_bulk_select: 'Please select item(s)',
        delete_bulk_confirm: 'Are you sure you wish to delete selected Example?',
    }
}

const ExampleListController: FC<any> = props => {
    const location = useLocation();
    const queryParams = queryString.parse(location.search);

    const queryState = {
        filters: {
            status: queryParams?.status || initialState.filters.status,
        }
    }

    const { BaseCrudListService, formRef, payload, setFilters, initialValues, listData, search, filters, sort, pagination, totalCount, loading,
        entityId, isShowView, isShowForm, isShowModalForm, selectedRowKeys, bulkAction, reloadListing, reloadView, reloadForm } = useCrudListService(ExampleApi, queryState, initialState, props);

    useEffect(() => {
        initData();
    }, [search, filters, sort, pagination, reloadListing])

    useEffect(() => {
        handleUrl();
    }, [entityId, isShowView, isShowForm, isShowModalForm])

    useEffect(() => {
        if (bulkAction.action !== '') {
            executeBulkAction();
        }
    }, [bulkAction])

    const initData = async () => {
        await handleUrl();
        await handlePayload();
        await loadData();
    }

    const loadData = (): Promise<any> => {
        return BaseCrudListService.loadData();
    }

    const executeBulkAction = (): Promise<any> => {
        return BaseCrudListService.executeBulkAction();
    };

    const handleUrl = (): void => {
        let urlObject: any = {}

        if (search) {
            urlObject.q = search
        }
        if (filters.status) {
            urlObject.status = filters.status
        }
        BaseCrudListService.handleUrl(urlObject);
    }

    const processFilters = (): string => {
        let filterString = "";

        if (filters.status) {
            filterString += " status='" + filters.status + "'";
        }

        return BaseCrudListService.processFilters(filterString);
    }

    const processQueryParams = () => {
        let filterString = {};
        return BaseCrudListService.processQueryParams(filterString);
    }

    const processOrderBy = (): string => {
        let orderByString = '';
        return BaseCrudListService.processOrderBy(orderByString);
    }

    const handlePayload = (): void => {
        payload.current = {
            '$select': '',
            '$search': search,
            '$filter': processFilters(),
            '$queryParams': processQueryParams(),
            '$expand': '',
            '$orderby': processOrderBy(),
            '$top': pagination.pageSize,
            '$skip': pagination.pageSize * (pagination.currentPage - 1),
        }
    }

    const onChangeSwitchToggle = (checked: any, record: any) => {
        BaseCrudListService.onChangeSwitchToggle(checked, record);
    }

    const handleTableChange = (pagination: any, filters: any, sorter: any, extra: any) => {
        BaseCrudListService.handleTableChange(pagination, filters, sorter, extra);
    }

    const handleOnChanged = (fieldName: string, value: any, text?: any) => {
        if (fieldName === 'filter_status') {
            setFilters({
                ...filters,
                status: value,
            });
        }
        BaseCrudListService.handleOnChanged(fieldName, value, text);
    }

    const handleCallbackFunc = (event: any, action: string, recordId?: any, data?: any) => {
        BaseCrudListService.handleCallbackFunc(event, action, recordId, data);
    }

    return (
        <>
            <Form form={formRef} name="exampleListingFilterForm" initialValues={initialValues} >
                <ExampleListFilter
                    filters={filters}
                    handleOnChanged={handleOnChanged}
                    handleCallbackFunc={handleCallbackFunc}
                />
                <ExampleListing
                    loading={loading}
                    listData={listData}
                    reloadListing={reloadListing}
                    selectedRowKeys={selectedRowKeys}
                    onChangeSwitchToggle={onChangeSwitchToggle}
                    handleOnChanged={handleOnChanged}
                    handleTableChange={handleTableChange}
                    handleCallbackFunc={handleCallbackFunc}
                />
                <ExampleListPagination
                    pagination={pagination}
                    totalCount={totalCount}
                    handleOnChanged={handleOnChanged}
                />

                <ExampleViewController entityId={entityId} reloadView={reloadView} isShowView={isShowView} handleCallbackFunc={handleCallbackFunc} />
                <ExampleFormController entityId={entityId} reloadForm={reloadForm} isShowForm={isShowForm} handleCallbackFunc={handleCallbackFunc} />

                <ExampleStatusFormController entityId={entityId} reloadForm={reloadForm} modalFormObject={{ modalFormType: ModalFormType, whichModal: ModalFormType.UPDATE_EXAMPLE_STATUS }} isShowModalForm={isShowModalForm[ModalFormType.UPDATE_EXAMPLE_STATUS]} handleCallbackFunc={handleCallbackFunc}
                />
            </Form>
        </>

    );
}

export default ExampleListController;
