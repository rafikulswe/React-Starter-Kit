import { RedoOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Select } from "antd";
import React, { FC } from "react";
import CreateAction from "../../../components/Actions/CreateAction";
import { ExampleAction } from "../Actions/Example.actions";

const ExampleListFilter: FC<any> = props => {
    const { filters, handleOnChanged, handleCallbackFunc } = props;
    const { Search } = Input;
    const { Option } = Select;

    return (
        <>
            <Row style={{ margin: '5px' }}>
                <Col span={12}>
                    <label style={{ fontWeight: 'bold' }}>Example List</label>
                </Col>

                <Col span={12} style={{ textAlign: 'right' }}>
                    <CreateAction actionItem={ExampleAction.COMMON_ACTION.CREATE} handleCallbackFunc={handleCallbackFunc} />
                </Col>
            </Row>

            <Row style={{ margin: '5px' }}>
                <Col span={6}>
                    <Form.Item name="search">
                        <Search placeholder="input search text" onSearch={(value) => handleOnChanged('search', value)} style={{ width: '100%' }} />
                    </Form.Item>
                </Col>

                <Col span={6}>
                    <Form.Item name="status" label={'Status'} style={{ marginLeft: '5px' }}>
                        <Select
                            showSearch
                            popupMatchSelectWidth={true}
                            optionFilterProp="children"
                            defaultValue={filters.status}
                            onChange={(value) => handleOnChanged('filter_status', value)}
                            filterOption={(input, option: any) => option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="">{'All'}</Option>
                            <Option value="1">{'Active'}</Option>
                            <Option value="0">{'Inactive'}</Option>
                        </Select>
                    </Form.Item>
                </Col>

                <Col span={12} style={{ textAlign: 'right' }}>

                    <Button type="primary" title="Reset" icon={<RedoOutlined />} style={{ marginRight: '5px' }} onClick={(event) => handleCallbackFunc(null, 'resetListing')}></Button>
                    <Button type="primary" title="Reload" icon={<ReloadOutlined />} style={{ marginRight: '5px' }} onClick={(event) => handleCallbackFunc(null, 'reloadListing')}></Button>
                </Col>
            </Row>

        </>

    );
}

export default React.memo(ExampleListFilter);
