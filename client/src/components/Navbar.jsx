import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark mb-3'>
      <div className="container">
        <span className="navbar-brand">Authors</span>
        <ul className="navbar-nav">
          <li className="nav-item d-flex justify-content-end">
            <Link className='nav-link' to='/authors'>All Authors</Link>
            <Link className='nav-link' to='/authors/add'>Add Author</Link>
          </li>
        </ul>
      </div>

    </nav>
  )
}

export default Navbar