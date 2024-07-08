import { Form } from "antd";
import { useEffect, useState } from "react";


export const useForm = (initialState = {}) => {
    const [formRef] = Form.useForm();
    const initialValues = initialState;
    const [errors, setErrors] = useState<any>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [formValues, setFormValues] = useState<any>({});

    useEffect(() => {
        if (typeof initialValues === 'object') {
            setFormValues(initialValues);
        }
    }, []);

    useEffect(() => {
        let errorArray: any = [];
        if (Object.keys(errors).length) {
            for (const errorKey of Object.keys(errors)) {
                let errorObj = {
                    name: errorKey,
                    errors: [errors[errorKey]]
                }
                errorArray.push(errorObj);
            }
            formRef.setFields(errorArray)
        }
    }, [errors]);

    const handleChange = (changedValues: any, allValues?: any) => {
        if (typeof changedValues === 'object') {
            setFormValues({
                ...allValues,
                ...changedValues
            });
        } else {
            setFormValues({
                ...formValues,
                ...changedValues
            });
        }
    };

    const handleSubmitFailed = (values: any): void => {
        setIsSubmitting(false);
    };

    const resetForm = () => {
        formRef.resetFields();
    }


    return {
        formRef,
        initialValues,
        formValues,
        errors,
        setErrors,
        isSubmitting,
        setIsSubmitting,
        handleChange,
        handleSubmitFailed,
        resetForm
    };
}