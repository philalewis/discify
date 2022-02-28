import React, { createContext, useState, useEffect, useContext } from 'react'
import { getAllPlayers } from '../apiCalls'
import { Errors } from './ErrorsProvider'

export const LeagueMembers = createContext()

export const LeagueMembersProvider = ({ children }) => {
  const { errorMessage, setErrorMessage } = useContext(Errors)
  const [ leagueMembers, setLeagueMembers ] = useState([])

  const getLeagueMembers = () => {
    getAllPlayers()
    .then(data => {
      setLeagueMembers(data)
    })
    .catch(error => setErrorMessage(error))
  }

  useEffect(() => {
    getLeagueMembers()
  }, [])

    return(
      <LeagueMembers.Provider value={{ leagueMembers, setLeagueMembers, getLeagueMembers }}>
        {children}
      </LeagueMembers.Provider>
    )
}
