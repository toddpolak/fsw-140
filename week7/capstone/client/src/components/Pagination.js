import React from 'react'

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className='paging'>
            <div className='pagenumbers'>
                {pageNumbers.map(number => { 
                    return <div key={number} className='page-item'>
                        <div onClick={() => paginate(number)}>{number}</div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Pagination
