import React, { createContext, useState } from 'react'

export const ScorecardInfo = createContext()

export const ScorecardInfoProvider = ({ children }) => {

  const [ scorecard, setScorecard ] = useState([])

  return(
    <ScorecardInfo.Provider value={{ scorecard, setScorecard }}>
      {children}
    </ScorecardInfo.Provider>
  )
}
