import React, { useEffect, useContext, useState } from 'react'
import Select from 'react-select'
import { useLocation, Link } from 'react-router-dom'
import { CourseInfo, ScorecardInfo } from '../context'
import { getSingleCourse } from '../apiCalls'

const SingleCourse = () => {
  const location = useLocation()
  const pathname = location.pathname.split('/')
  const id = pathname[pathname.length - 1]

  const [ course, setCourse ] = useState({})
  const [ layoutState, setLayout ] = useState({})
  const {courseInfo, setCourseInfo} = useContext(CourseInfo)
  const { scorecard, setScorecard } = useContext(ScorecardInfo)
  
  useEffect(() => {
    getSingleCourse(id)
    .then(data => {
      setCourse(data)
    })
  }, [])

  const layoutOptions = () => {
    return course.layouts ? course.layouts.map(layout => {
      return {
        value: layout,
        label: layout.name
      }
    }) : []
  }

  const onChange = (layout) => {
    setLayout(layout)
  }

  const handleClick = (event) => {
    setScorecard({
      ...scorecard,
      courseName: course.name,
      courseId: course.id,
      layout: layoutState,
      par: layoutState.total_par,
      holes: layoutState.holes.length
    })
  }

  return (
    <>
      <h2>{course.name}</h2>
      <p>{course.location}</p>
      {course.rating > 0 && <p>{course.rating} /5</p>}
      <p>{course.city}, {course.state}</p>
      <p>Number of Holes: {course.holes}</p>
      <Select onChange={event => onChange(event.value)} options={layoutOptions()}/>
      { layoutState.name &&
        <section className='layout'>
          <p>Name: {layoutState.name}</p>
          <p>Description: {layoutState.description}</p>
          <p>Number of Holes: {layoutState.holes.length}</p>
          <p>Par: {layoutState.total_par}</p>
          <p>Distance: {layoutState.total_distance}</p>
        </section>
      }
      <Link to='/setup_scorecard/'>
        <button className="choose-course-btn" onClick={handleClick}>CHOOSE COURSE</button>
      </Link>
    </>
  )
}

export default SingleCourse