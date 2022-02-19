import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Courses = () => {
  const [ searchParams ] = useSearchParams()

  // const currentCourses = apiCalls.getCourses(searchParams)

  return (
    <section>
      <h2>IT WORKED!!!!</h2>
      { searchParams }
    </section>
  )
}

export default Courses