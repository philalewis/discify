import React from 'react'
import { useSearchParams } from 'react-router-dom'
import SingleCourse from './SingleCourse'

const Courses = () => {
  const [ searchParams ] = useSearchParams()

  // const currentCourses = apiCalls.getCourses(searchParams)

  return (
    <section>
      <h2>IT WORKED!!!!</h2>
      <SingleCourse />
    </section>
  )
}

export default Courses