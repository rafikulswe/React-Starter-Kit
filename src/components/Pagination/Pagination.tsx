import React from 'react'
import { Pagination as AntPagination } from 'antd';

type Props = {
    currentPage: number;
    pageSize: number;
    total: number;
    pageSizeOptions?: string[];

    onChangePage: (page: number, pageSize?: number) => void;
    onShowSizeChange?: (current: number, size: number) => void;
};

const Pagination: React.FC<Props> = (props: Props) => {
    const { currentPage, pageSize, total, pageSizeOptions } = props;

    function handleChange(page: any, pageSize: any) {
        props.onChangePage(page, pageSize);
    }

    return (
        <AntPagination
            showSizeChanger
            onShowSizeChange={handleChange}
            onChange={handleChange}
            current={currentPage}
            pageSize={pageSize}
            total={total}
            pageSizeOptions={pageSizeOptions}
        />
    )
}

export default React.memo(Pagination);