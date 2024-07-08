import React, { FC, useEffect } from "react";
import ExampleStatusForm from "./ExampleStatusForm.form";
import { ExampleApi } from "../../../api";
import { Message } from "../../../utils";
import ModalUpdateForm from "../../../components/Modal/ModalUpdateForm";
import { useCrudFormService } from "../../../hooks/crud/useCrudFormService";

const initialState = {
    modalTitle: "Update Status",
    itemData: {},
    fileUpload: [],
    fields: {
        status: null,
    },
    isNewRecord: true,
    loading: false,
    message: {
        network_error: "A network error occurred. Please try again later.",
        create_success: "The operation performed successfully.",
        update_success: "The operation performed successfully.",
    },
};

const ExampleStatusFormController: FC<any> = (props) => {
    const { BaseCrudFormService, entityId, modalTitle, setModalTitle, isNewRecord, setIsNewRecord, modalFormObject, isShowModalForm, reloadForm, itemData, loading, setLoading, resetForm, isSubmitting, setIsSubmitting, formRef, setErrors,
        initialValues, handleChange, handleSubmitFailed, handleCallbackFunc } = useCrudFormService(ExampleApi, initialState, props);

    useEffect(() => {
        if (entityId && isShowModalForm) {
            setIsNewRecord(false);
            setModalTitle('Update Status');
            resetForm();
            loadData();
        }
        else {
            resetForm();
            setModalTitle(initialState.modalTitle);
            setIsNewRecord(initialState.isNewRecord);
        }
    }, [entityId, reloadForm])

    const loadData = (): void => {
        BaseCrudFormService.loadData();
    }

    const handleSubmit = (values: any): void => {
        if (entityId) {
            handleUpdate(values);
        }
    }

    const handleUpdate = (values: any): Promise<any> => {
        const payload = {
            ...values,
        }
        return new Promise<any>((resolve, reject) => {
            setLoading(true);
            setIsSubmitting(true);
            ExampleApi.updatePartial(entityId, payload)
                .then(res => {
                    Message.success(initialState.message.update_success);
                    handleCallbackFunc(null, 'hideModalUpdateForm', '', modalFormObject);
                    handleCallbackFunc(null, 'reloadListing');
                    setLoading(false);
                    setIsSubmitting(false);
                    resolve(res);
                })
                .catch(err => {
                    if (err?.status === 409) {
                        setErrors(err.data);
                    }
                    else if (err?.status === 412) {
                        setErrors(err.data);
                    }
                    else if (err?.status === 422) {
                        Message.error(err.data, 5)
                    } else {
                        Message.error('A network error occurred. Please try again later.');
                    }
                    setLoading(false);
                    setIsSubmitting(false);
                    reject(err);
                });
        })
    }

    return (
        <div className="">
            <ModalUpdateForm
                modalWidth={"30%"}
                loading={loading}
                isNewRecord={isNewRecord}
                itemData={itemData}
                modalTitle={modalTitle}
                isSubmitting={isSubmitting}
                modalFormObject={modalFormObject} //{ modalFormType: enum, whichModal: modalName}
                isShowModalForm={isShowModalForm}
                formRef={formRef}
                initialValues={initialValues}
                component={ExampleStatusForm}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleSubmitFailed={handleSubmitFailed}
                handleCallbackFunc={handleCallbackFunc}
            />
        </div>
    );
};

export default React.memo(ExampleStatusFormController);
