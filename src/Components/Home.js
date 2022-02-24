import React, { useContext, useState , useEffect } from 'react'
import { LeagueMembers, LeagueMembersProvider } from '../Contexts/LeagueMembersProvider'
import Searchbar from './Searchbar'

const Home = () => {
  const { leagueMembers } = useContext(LeagueMembers)

  // useEffect(() => {
  //   LeagueMembersProvider.getPlayers()
  // }, [])

  // console.log(LeagueMembersProvider.getPlayers())

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
