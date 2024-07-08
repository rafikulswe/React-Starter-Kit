import React from 'react'
type Props = {
    currentPage: number;
    pageSize: number;
    total: number;
};

const PaginationTotalItem: React.FC<Props> = (props: Props) => {
    const { currentPage, pageSize, total } = props;
    let showingStart = ((currentPage - 1) * pageSize) + 1;
    let showingEnd = (currentPage * pageSize);
    if (showingEnd > total) {
        showingEnd = total;
    }
    if (total === 0) {
        return <p>{'Showing 0 items'}</p>
    }
    return (
        <p>Per Page  {(showingStart + showingEnd) - 1}  {'items' + " | " + 'Showing'} {(showingEnd - showingStart) + 1} {'items'} {'out of'} {total}</p>
    )
}

export default React.memo(PaginationTotalItem);