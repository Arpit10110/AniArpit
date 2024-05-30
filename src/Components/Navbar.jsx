import React from 'react'
import "../Style/Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
   <nav>
    <div className="logo">
        <h3>AniArpit</h3>
    </div>
    <div className="links">
        <Link to="/" >Home</Link>
        <Link to="/contact" >Contact me</Link>
    </div>
   </nav>
  )
}

export default Navbar
