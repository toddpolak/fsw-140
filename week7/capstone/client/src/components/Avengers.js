import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Avengers(props) {
    const [ avengerList, setAvengerList ] = useState([])

    useEffect(() => {
        axios.get('http://localhost:9000/api/get')
          .then((response => {
            setAvengerList(response.data)
          }))
      }, [])

    return (
        <div>
            <h1>Avengers</h1>
                {avengerList.map((val, index) => {
                return <div key={index}>
                    <h2>{val.name}</h2>

                    <a href={`${val.url}`} 
                        target='_blank' 
                        rel="noopener noreferrer">View</a>

                    <h3>{val.notes}</h3>

                    </div>
                })}
        </div>
    )
}
