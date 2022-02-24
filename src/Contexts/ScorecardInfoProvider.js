import React, { createContext, useState } from 'react'

export const ScorecardInfo = createContext()

export const ScorecardInfoProvider = ({ children }) => {

  const [ scorecard, setScorecard ] = useState({
    courseName: 'West Fork',
    courseId: null,
    roundId: null,
    par: 54,
    holes: 18,
    players: [],
    layout: {},
    currentHole: {
      number: 0,
      players: [{
        id: 1,
        score: 0,
        totalScore: 0
      }]
    },
    inProgress: false,
    final: {}
  })


    return(
      <ScorecardInfo.Provider value={{ scorecard, setScorecard }}>
        {children}
      </ScorecardInfo.Provider>
    )
}
