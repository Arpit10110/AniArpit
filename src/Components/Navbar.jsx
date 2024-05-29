import React from 'react'
import "../Style/Navbar.css"
const Navbar = () => {
  return (
   <nav>
    <div className="logo">
        <h3>AniArpit</h3>
    </div>
    <div className="search">
        <input type="text" placeholder='Search for your favorite anime...' />
    </div>
   </nav>
  )
}

export default Navbar
