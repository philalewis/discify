import React from 'react'

export const DiscContext = React.createContext({
  name: 'Discify',
  leagueMembers: [],
  scorecard: {
    courseName: 'West Fork',
    par: 54,
    holes: 18,
    players: []
  },
  courses: []
})
