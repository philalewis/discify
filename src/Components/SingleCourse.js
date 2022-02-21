import React, { useEffect, useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { DiscContext } from '../context'
import { getSingleCourse } from '../apiCalls'

const SingleCourse = () => {
  const location = useLocation()
  const pathname = location.pathname.split('/')
  const id = pathname[pathname.length - 1]
  
  console.log(id)
  const [ course, setCourse ] = useState({})
  const {discContext, setDiscContext} = useContext(DiscContext)
  
  useEffect(() => {
    getSingleCourse(id)
    .then(data => setCourse(data))
  }, [])

  return (
    <h2>{course.name}</h2>
  )
}

export default SingleCourse