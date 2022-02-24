import React, { createContext, useState } from 'react'

const CourseInfo = createContext()

const CourseInfoProvider = () => {

    const [ courseInfo, setCourseInfo ] = useState({
      courses: [],
      searchURL: '',
      currentCourse: {}
    })

    return(
      <CourseInfo.Provider value={value}>
        {children}
      </CourseInfo.Provider>
    )
}

export default CourseInfoProvider
