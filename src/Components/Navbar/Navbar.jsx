import React from 'react'
import './Navbar.css'
import logo from '../../assets/myLogo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        
        <img src={logo} width={"140px"} alt="" />
        <ul className="navMenu">

            <li>Home</li>
            <li>About Me</li>
            <li>Projects</li>
            <li>CV</li>
            <li>Contact</li>
        </ul>

        <div className="navConnect">Connect with Me</div>
    </div>
  )
}

export default Navbar
