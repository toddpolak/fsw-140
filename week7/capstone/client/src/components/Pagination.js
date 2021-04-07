import React from 'react'

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className='paging'>
            <div className='pagenumbers'>
                <strong>Page:</strong>
                {pageNumbers.map(number => { 
                    return <div key={number} className='page-item'>
                        <div onClick={() => paginate(number)}
                            className={currentPage === number ? 'selected' : ''}>{number}
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Pagination
