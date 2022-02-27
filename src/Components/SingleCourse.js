import React, { useEffect, useContext, useState } from 'react'
import Select from 'react-select'
import { useLocation, Link } from 'react-router-dom'
import { CourseInfo } from '../Contexts/CourseInfoProvider'
import { getSingleCourse } from '../apiCalls'
import '../Styles/SingleCourse.scss'
import CourseHeader from './CourseHeader'

const SingleCourse = () => {
  const location = useLocation()
  const pathname = location.pathname.split('/')
  const id = pathname[pathname.length - 1]

  const [ course, setCourse ] = useState({})
  const [ layout, setLayout ] = useState({})
  const { courseInfo, setCourseInfo } = useContext(CourseInfo)

  useEffect(() => {
    getSingleCourse(id)
    .then(data => {
      setCourse(data)
    })
  }, [])

  const layoutOptions = () => {
    return course.layouts ? course.layouts.map(option => {
      return {
        value: option,
        label: option.name
      }
    }) : []
  }

  const onChange = (layout) => {
    setLayout(layout)
  }

  const handleClick = () => {
    setCourseInfo({
      ...courseInfo,
      currentCourse: {...course, layout: layout}
    })
  }

  return (
    <div className="single-course-container">
      <div className="course-header">
        <h2 className="course-name">{course.name}</h2>
        <p className="course-location">{course.city}, {course.state}</p>
      </div>
      {course.rating > 0 && <p className="course-rating"><span className="bold">Rating:</span> {course.rating}/5</p>}
      <p><span className="bold">Number of Holes:</span> {course.holes}</p>
      <Select onChange={event => onChange(event.value)} options={layoutOptions()}/>
      { 
        layout.name &&
        <section className='layout'>
          <p><span className="bold">Layout:</span> {layout.name}</p>
          <p><span className="bold">Number of Holes:</span> {layout.holes.length}</p>
          <p><span className="bold">Par:</span> {layout.total_par}</p>
          <p><span className="bold">Distance:</span> {layout.total_distance} ft</p>
          <p><span className="bold">Description:</span> {layout.description}</p>
        </section>
      }
      <Link to='/setup_scorecard/'>
        <button
          className="choose-course-btn"
          onClick={handleClick}
        >CHOOSE COURSE</button>
      </Link>
    </div>
  )
}

export default SingleCourse
