import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/discify-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../Styles/Navbar.scss'

const Navbar = () => {
  return (
    <nav>
      <img
        className='logo'
        src={logo}
        alt='Discify Logo'
      />
      <button><FontAwesomeIcon icon={ faBars }/></button>
    </nav>
  )
}

export default Navbar
