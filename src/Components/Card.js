import React from 'react'

const Card = ({course}) => {
  return (
    <button className='course-card'>
      <h3 className='card-name'>{course.name}</h3>
      <p className='card-location'>{course.city}, {course.state}</p>
      <p className='card-holes'>{course.holes}</p>
    </button>
  )
}

export default Card
