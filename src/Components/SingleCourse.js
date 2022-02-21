import React, { useEffect, useContext, useState } from 'react'
import Select from 'react-select'
import { useLocation } from 'react-router-dom'
// import { DiscContext } from '../context'
import { getSingleCourse } from '../apiCalls'

const SingleCourse = () => {
  const location = useLocation()
  const pathname = location.pathname.split('/')
  const id = pathname[pathname.length - 1]

  const [ course, setCourse ] = useState({})
  const [ layoutState, setLayout ] = useState({})
  // const [ layoutOptions, setLayoutOptions ] = useState([])
  // const {discContext, setDiscContext} = useContext(DiscContext)
  
  useEffect(() => {
    getSingleCourse(id)
    .then(data => {
      setCourse(data)
      // populateOptions(data.layouts)
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
    </>
  )
}

export default SingleCourse