import React, { createContext } from 'react'

export const DiscContext = createContext({
  name: 'Discify',
  leagueMembers: [],
  scorecard: {
    courseName: 'West Fork',
    par: 54,
    holes: 18,
    players: []
  },
  courses: [],

  setCourses: () => {}
})
