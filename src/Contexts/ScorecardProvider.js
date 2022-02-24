import React, { createContext, useState } from 'react'

const ScorecardInfo = createContext()

const ScorecardInfoProvider = () => {

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
      <ScorecardInfo.Provider value={value}>
        {children}
      </ScorecardInfo.Provider>
    )
}

export default ScorecardInfoProvider
