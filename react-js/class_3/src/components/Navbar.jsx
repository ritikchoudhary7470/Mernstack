import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
  <nav className="navbar navbar-expand-sm bg-light">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/card">Card </Link>
      </li>
    </ul>
  </div>
</nav>
   </>
  )
}

export default Navbar