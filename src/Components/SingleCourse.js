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
    <>
      <div className="course-header">
        <h2 className="course-name">{course.name}</h2>
        <p className="course-city">{course.city}, </p>
        <p className="course-state">{course.state}</p>
      </div>
      {course.rating > 0 && <p>{course.rating} /5</p>}
      <p>Number of Holes: {course.holes}</p>
      <Select onChange={event => onChange(event.value)} options={layoutOptions()}/>
      { 
        layout.name &&
        <section className='layout'>
          <p>Name: {layout.name}</p>
          <p>Description: {layout.description}</p>
          <p>Number of Holes: {layout.holes.length}</p>
          <p>Par: {layout.total_par}</p>
          <p>Distance: {layout.total_distance} ft</p>
        </section>
      }
      <Link to='/setup_scorecard/'>
        <button
          className="choose-course-btn"
          onClick={handleClick}
        >CHOOSE COURSE</button>
      </Link>
    </>
  )
}

export default SingleCourse
