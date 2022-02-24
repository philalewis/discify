import React, { createContext, useState } from 'react'

export const CourseInfo = createContext()

export const CourseInfoProvider = ({ children }) => {

    const [ courseInfo, setCourseInfo ] = useState({
      courses: [],
      searchURL: '',
      currentCourse: {}
    })

    return(
      <CourseInfo.Provider value={{ courseInfo, setCourseInfo }}>
        {children}
      </CourseInfo.Provider>
    )
}
