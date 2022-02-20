import React, { useState } from 'react'
import { Link, Route, useNavigate } from 'react-router-dom'
import Courses from './Courses'
import '../Styles/Searchbar.scss'


const Searchbar = () => {
  const [ inputValue, setInputValue ] = useState('')

  const navigate = useNavigate()

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const searchCourses = () => {
    !inputValue ?
      navigate('/courses') :
      navigate(`/courses?name=${inputValue}`)
  }

  return (
    <div className='search-bar-container'>
      <input type="text" className="search-bar" value={inputValue} onChange={event => handleChange(event)}/>
      <button className="search-btn" onClick={searchCourses}>SEARCH</button>
    </div>
  )
}

export default Searchbar
