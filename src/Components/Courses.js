import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { getAllCourses } from '../apiCalls'
import { CourseInfo, Errors } from '../context'
import Card from './Card'
import '../Styles/Courses.scss'

const Courses = () => {
  const { courseInfo, setCourseInfo } = useContext(CourseInfo)
  const { errorMessage, setErrorMessage } = useContext(Errors)

  const currentCourses = courseInfo.courses.map(course => {
    return (
      <Link to={`/course/${course.id}`} key={course.id}>
        <Card course={course} />
      </Link>
    )
  })

  useEffect(() => {
    getAllCourses()
    .then(data =>  {
      setCourseInfo({
        ...courseInfo,
        courses: data
      })
    })
    .catch(error => setErrorMessage(error))
  }, [])

  return (
    <section className='course-card-container'>
      <h2>IT WORKED!!!!</h2>
      {currentCourses}
    </section>
  )
}

export default Courses
