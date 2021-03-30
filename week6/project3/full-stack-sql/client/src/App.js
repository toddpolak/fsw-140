import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [ animalList, setAnimalList ] = useState([])

  useEffect(() => {
    axios.get('http://localhost:9000/api/get')
      .then((response => {
        setAnimalList(response.data)
      }))
  }, [])

  return (
    <div>
      <h1>Animals</h1>
        {animalList.map((val, index) => {
          return <div key={index}>
              <h2>{val.type}</h2>
              <img src={val.img_url} alt='' />
            </div>
        })}
    </div>
  )
}

export default App
