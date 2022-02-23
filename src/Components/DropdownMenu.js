import React from 'react'
import { Link } from 'react-router-dom'

const DropdownMenu = () => {

  return(
    <div className='dropdown-container'>
    <Link to="/">HOME</Link>
    <Link to="/manage/">MANAGE LEAGUE</Link>
    <Link to="/stats/">LEAGUE STATS</Link>
    <Link to="/scorecard/">SCORECARD</Link>
    </div>

  )
}

export default DropdownMenu
