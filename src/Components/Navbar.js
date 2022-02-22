import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.scss'

const Navbar = () => {
  return (
    <nav>
      <h1>Discify</h1>
      <Link to="/">HOME</Link>
      <Link to="/manage/">MANAGE LEAGUE</Link>
      <Link to="/stats/">LEAGUE STATS</Link>
      <Link to="/scorecard/">SCORECARD</Link>
    </nav>
  )
}

export default Navbar
