import React, { createContext, useState, useEffect, useContext } from 'react'
import { getAllPlayers } from '../apiCalls'
import { Errors } from './ErrorsProvider'

export const LeagueMembers = createContext()

export const LeagueMembersProvider = ({ children }) => {
  const { errorMessage, setErrorMessage } = useContext(Errors)

  const [ leagueMembers, setLeagueMembers ] = useState([])

  useEffect(() => {
    getAllPlayers()
    .then(data => {
      setLeagueMembers(data)
    })
    .catch(error => setErrorMessage(error))
  }, [])

    return(
      <LeagueMembers.Provider value={{ leagueMembers, setLeagueMembers }}>
        {children}
      </LeagueMembers.Provider>
    )
}
