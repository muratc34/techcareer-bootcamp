import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    
    <nav className='navbar'>
        <ul className='navbar-menu'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/products">Products</Link>
            </li>
            <li>
                <Link to="/addproduct">Add Product</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar