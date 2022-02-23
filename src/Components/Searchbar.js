import React, { useState, useContext } from 'react'
import { CourseInfo } from '../context'
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
    setCourseInfo({
      ...courseInfo,
      searchURL: !inputValue ? '/courses' : `/courses?name=${inputValue}`
    })
  }

  const searchCourses = () => {
    updateSearchContext()
    navigate(courseInfo.searchURL)
    // !inputValue ?
    //   navigate('/courses') :
    //   navigate(`/courses?name=${inputValue}`)
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
