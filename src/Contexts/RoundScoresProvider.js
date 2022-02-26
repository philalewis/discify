import React, { createContext, useState } from 'react'

export const RoundScores = createContext()

export const RoundScoresProvider = ({ children }) => {

  const [ scores, setScores ] = useState([])

  return(
    <RoundScores.Provider value={{ scores, setScores }}>
      {children}
    </RoundScores.Provider>
  )
}
