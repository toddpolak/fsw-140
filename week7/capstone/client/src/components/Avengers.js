import React, { useState, useEffect } from 'react'
import Pagination from './Pagination'
import axios from 'axios'

export default function Avengers(props) {
    const [ avengerList, setAvengerList ] = useState([])

    const [ currentPage, setCurrentPage ] = useState(1)
    const [ itemsPerPage ] = useState(5)

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
                    <h1>Avengers</h1>
                </div>
                <Pagination 
                        itemsPerPage={itemsPerPage} 
                        totalItems={avengerList.length} 
                        paginate={paginate} />


                {currentItems.map((val, index) => {
                    return <div className='avengers-list' key={index}>
                                <h2>{val.name}</h2>
                                <a href={`${val.url}`} 
                                    target='_blank' 
                                    rel="noopener noreferrer">View</a>
                                <h3>{val.notes}</h3>
                            </div>
                })}
                <Pagination 
                    itemsPerPage={itemsPerPage} 
                    totalItems={avengerList.length} 
                    paginate={paginate} />
            </div>
        </div>
    )
}
