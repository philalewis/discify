import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/discify-logo.png'
import '../Styles/Navbar.scss'

const Navbar = () => {
  return (
    <nav>
      <img
        className='logo'
        src={logo}
        alt='Discify Logo'
      />
      <button></button>
    </nav>
  )
}

export default Navbar
