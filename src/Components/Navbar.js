import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/discify-logo.png'
import DropdownMenu from './DropdownMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../Styles/Navbar.scss'

const Navbar = () => {

  const [ clicked, setClick ] = useState(false)

  const toggleClick = () => {
    setClick(!clicked)
  }

  return (
    <>
      <nav>
        <Link to='/'>
          <img
            className='logo'
            src={logo}
            alt='Discify Logo'
          />
        </Link>
        <button
          className='dropdown-button'
          onClick={toggleClick}>
          <FontAwesomeIcon icon={ faBars }/>
        </button>
      </nav>
      {clicked && <DropdownMenu toggleClick={toggleClick}/>}
    </>
  )
}

export default Navbar
