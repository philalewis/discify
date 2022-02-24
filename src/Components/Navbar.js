import React, { useState } from 'react'
import logo from '../assets/discify-logo.png'
import DropdownMenu from './DropdownMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../Styles/Navbar.scss'

const Navbar = () => {

  const [clicked, setClick] = useState(false)

  const toggleClick = () => {
    console.log(clicked)
    setClick(!clicked)
  }

  return (
    <>
      <nav>
      <img
        className='logo'
        src={logo}
        alt='Discify Logo'
      />
      <button
        className='dropdown-button'
        onClick={toggleClick}>
          <FontAwesomeIcon icon={ faBars }/>
      </button>
      </nav>
      {clicked && <DropdownMenu />}
    </>
  )
}

export default Navbar
