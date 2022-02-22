import React, { useEffect, useContext } from 'react'
import { getAllCourses } from '../apiCalls'
import { CourseInfo, Errors } from '../context'
import Card from './Card'
import '../Styles/Courses.scss'

const Courses = () => {
  const { courseInfo, setCourseInfo } = useContext(CourseInfo)
  const { errorMessage, setErrorMessage } = useContext(Errors)

  const currentCourses = courseInfo.courses.map(course => {
    return <Card course={course} key={course.id}/>
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
