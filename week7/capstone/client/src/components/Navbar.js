import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div className="navbar">
      <Link to='/'>Home</Link>
      <Link to='/avengers'>Avengers</Link>
    </div>
  )
}
