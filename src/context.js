import React, { createContext } from 'react'

export const DiscContext = createContext({
  name: 'Discify',
  leagueMembers: [],
  scorecard: {
    courseName: 'West Fork',
    courseId: null,
    par: 54,
    holes: 18,
    players: []
  },
  courses: [],
  error: null,

  setCourses: () => {}
})
