import { Col, Row } from "antd";
import React, { FC } from "react";
import PaginationTotalItem from "../../../components/Pagination/PaginationTotalItem";
import Pagination from "../../../components/Pagination/Pagination";
import { ItemsPerPageDefaultOptions } from "../../../utils/enums/Pagination.const";

const ExampleListPagination: FC<any> = props => {
    const { } = props;

    return (
        <Row style={{ marginTop: '5px' }}>
            <Col span={12}>
                <PaginationTotalItem currentPage={1} pageSize={1} total={1} />
            </Col>
            <Col span={12}>
                <Pagination pageSizeOptions={ItemsPerPageDefaultOptions} currentPage={1} pageSize={1} total={1} onChangePage={() => { }} />
            </Col>
        </Row>
    );
}

export default React.memo(ExampleListPagination);
