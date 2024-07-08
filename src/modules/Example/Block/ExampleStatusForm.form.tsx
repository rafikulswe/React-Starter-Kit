import React, { FC, Fragment } from "react";
import { Form, Row, Col, Select } from "antd";

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 24 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 24 },
    },
};

const ExampleStatusForm: FC<any> = (props) => {
    const { Option } = Select;
    const { formRef, initialValues, handleChange, handleSubmit, handleSubmitFailed, itemData } = props;

    return (
        <Fragment>
            <div className="border border-gray rounded mt-3 p-5">
                <Form
                    {...formItemLayout}
                    form={formRef}
                    layout="vertical"
                    name="archiveContentBulkAddForm"
                    scrollToFirstError={true}
                    initialValues={initialValues}
                    onValuesChange={handleChange}
                    onFinish={handleSubmit}
                    onFinishFailed={handleSubmitFailed}
                >
                    <Row gutter={24}>
                        <Col span={24}>
                            <Form.Item label={"Status"} name="status">
                                <Select placeholder={"--" + 'Select' + "--"} >
                                    <Option key={`status-pending`} value={0}>Inactive</Option>
                                    <Option key={`status-approve`} value={1}>Active</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Fragment>
    );
};
export default React.memo(ExampleStatusForm);
