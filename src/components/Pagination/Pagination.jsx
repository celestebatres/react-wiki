import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({info, setPage, page}) => {

    return (
        <ReactPaginate
        pageCount={info?.pages}
        className="pagination justify-content-center gap-4 my-4"
        previousLabel="Prev"
        nextLabel="Next"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        onPageChange={(data)=>{
            setPage(data.selected + 1)
        }}
        activeClassName="active"
        forcePage={page===1? 0 : page - 1}
        />
    )
}

export default Pagination;