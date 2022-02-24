import React, { useState, useContext } from 'react'
import { CourseInfo } from '../Contexts/CourseInfoProvider'
import { Link, Route, useNavigate } from 'react-router-dom'
import Courses from './Courses'
import '../Styles/Searchbar.scss'


const Searchbar = () => {
  const { courseInfo, setCourseInfo } = useContext(CourseInfo)
  const [ inputValue, setInputValue ] = useState('')

  const navigate = useNavigate()

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const updateSearchContext = () => {
    let newURL = !inputValue ? '/courses' : `/courses?name=${inputValue}`
    setCourseInfo({
      ...courseInfo,
      searchURL: newURL
    })
    navigate(newURL)
  }

  const searchCourses = () => {
    updateSearchContext()
  }

  return (
    <div className='search-bar-container'>
      <input
        type="text"
        className="search-bar"
        value={inputValue}
        onChange={event => handleChange(event)}
      />
      <button className="search-btn" onClick={searchCourses}>SEARCH</button>
    </div>
  )
}

export default Searchbar
