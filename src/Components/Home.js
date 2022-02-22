import React, { useContext, useState } from 'react'
import { LeagueMembers } from '../context'
import Searchbar from './Searchbar'

const Home = () => {
  const { leagueMembers } = useContext(LeagueMembers)
  const members = leagueMembers.map(member => {
    return <p key={member.id}>{member.name}</p>
  })

  return (
    <div>
      <Searchbar />
      <h1>{members}</h1>
    </div>
  )
}

export default Home
