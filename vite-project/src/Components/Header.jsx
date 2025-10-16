import React from 'react'
import logo from "../assets/Image.png"
import "../App.css"

function Header() {
  return (
    <header className='header'>
      <a href="https://react.dev/"> <img src={logo}  alt="React Logo" height="50px" width="50px"/></a>
       <nav>
        <ul className='nav-links'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
       </nav>
    </header>
  )
}

export default Header