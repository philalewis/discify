import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/DropdownMenu.scss'

const DropdownMenu = () => {

  return(
    <div className='dropdown-container'>
      <Link to="/manage/">
        <button className='manage-link-btn'>MANAGE LEAGUE</button>
      </Link>
      <Link to="/scorecard/">
        <button className='score-link-btn'>SCORECARD</button>
      </Link>
    </div>
  )
}

export default DropdownMenu
