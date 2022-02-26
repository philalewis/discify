import React from 'react'
import '../Styles/CourseHeader.scss'

const CourseHeader = (props) => {
  return (
  <div className="course-header">
    <h2 className="course-name">{props.name}</h2>
    <p className="course-city">{props.city}, </p>
    <p className="course-state">{props.state}</p>
  </div>
  )
}

export default CourseHeader