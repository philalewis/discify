import React, { useContext } from 'react'
import { DiscContext } from '../context'
import { Route, Routes, Link } from 'react-router-dom'
import '../Styles/Navbar.scss'

const Navbar = () => {
  const { name } = useContext(DiscContext)

  return (
    <nav>
      <h1>{name}</h1>
      <Link to="/">HOME</Link>
      <Link to="/manage/">MANAGE LEAGUE</Link>
      <Link to="/stats/">LEAGUE STATS</Link>
      <Link to="/scorecard/">SCORECARD</Link>
    </nav>
  )
}

export default Navbar
