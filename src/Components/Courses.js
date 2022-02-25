import React, { useEffect, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getAllCourses, getFilteredCourses } from '../apiCalls'
import { CourseInfo } from '../Contexts/CourseInfoProvider'
import { Errors } from '../Contexts/ErrorsProvider'
import Card from './Card'
import Searchbar from './Searchbar'
import '../Styles/Courses.scss'

const Courses = () => {
  const { courseInfo, setCourseInfo } = useContext(CourseInfo)
  const { errorMessage, setErrorMessage } = useContext(Errors)
  const location = useLocation()

  const currentCourses = courseInfo.courses.map(course => {
    return (
      <Link to={`/course/${course.id}`} key={course.id}>
        <Card course={course} />
      </Link>
    )
  })

  useEffect(() => {
    const searchURL = location.state
    getFilteredCourses(searchURL)
    .then(data => {
      setCourseInfo({
        ...courseInfo,
        courses: data
      })
    })
    .catch(error => setErrorMessage(error))
  }, [location.state])

  return (
    <section className='course-card-container'>
      <Searchbar />
      {currentCourses}
    </section>
  )
}

export default Courses
