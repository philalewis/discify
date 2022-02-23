import React from 'react'
import { Link } from 'react-router-dom'

const DropdownMenu = () => {

  return(
    <div className='dropdown-container'>
      <Link to="/">
        <button className='home-link-btn'>HOME</button>
      </Link>
      <Link to="/manage/">
        <button className='manage-link-btn'>MANAGE LEAGUE</button>
      </Link>
      <Link to="/stats/">
        <button className='stats-link-btn'>LEAGUE STATS</button>
      </Link>
      <Link to="/scorecard/">
        <button className='score-link-btn'>SCORECARD</button>
      </Link>
    </div>

  )
}

export default DropdownMenu
