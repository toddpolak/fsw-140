import React, { useState, useEffect } from 'react'
import Pagination from './Pagination'
import axios from 'axios'
import logo from '../img/logo.png'

export default function Avengers(props) {
    const [ avengerList, setAvengerList ] = useState([])
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ itemsPerPage ] = useState(10)

    useEffect(() => {
        axios.get('http://localhost:9000/api/get')
          .then((response => {
            setAvengerList(response.data)
          }))
      }, [])

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = avengerList.slice(indexOfFirstItem, indexOfLastItem)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div>
            <div className='page'>
                <div>
                    <img src={logo} alt='' />
                </div>
                <Pagination 
                        itemsPerPage={itemsPerPage} 
                        totalItems={avengerList.length} 
                        paginate={paginate}
                        currentPage={currentPage} />
                <div className='space'></div>
                {currentItems.map((val, index) => {
                    return <div className='avengers-list' key={index}>
                                <a href={`${val.url}`} 
                                    target='_blank' 
                                    rel="noopener noreferrer">{val.name}</a>
                                <div>
                                    {val.notes !== 'NA' ? val.notes : ''}
                                </div>
                            </div>
                })}
                <div className='space'></div>
                <Pagination 
                    itemsPerPage={itemsPerPage} 
                    totalItems={avengerList.length} 
                    paginate={paginate}
                    currentPage={currentPage} />
            </div>
        </div>
    )
}
