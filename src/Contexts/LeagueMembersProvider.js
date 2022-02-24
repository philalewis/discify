import React, { createContext, useState } from 'react'

const LeagueMembers = createContext()

const LeagueMembersProvider = () => {

  const [ leagueMembers, setLeagueMembers ] = useState([])

    return(
      <LeagueMembers.Provider value={value}>
        {children}
      </LeagueMembers.Provider>
    )
}

export default LeagueMembersProvider
