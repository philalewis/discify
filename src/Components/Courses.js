import React, { useEffect, useContext } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getAllCourses } from '../apiCalls'
import { DiscContext } from '../context'
import SingleCourse from './SingleCourse'
import Card from './Card'
import '../Styles/Courses.scss'

const Courses = () => {
  const [ searchParams ] = useSearchParams()
  const { discContext, setDiscContext } = useContext(DiscContext)

  const currentCourses = discContext.courses.map(course => {
    console.log(course)
    return (
      <Card course={course} key={course.id}/>
    )
  })

  useEffect(() => {
    getAllCourses()
    .then(data =>  {
      setDiscContext({
        ...discContext,
        courses: data
      })
    })
    .catch(error => setDiscContext({
      ...discContext,
      error: error
    }))
  }, [])

  return (
    <section className='course-card-container'>
      <h2>IT WORKED!!!!</h2>
      {currentCourses}
    </section>
  )
}

export default Courses
