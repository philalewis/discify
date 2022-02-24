import React, { useContext, useState , useEffect } from 'react'
import { LeagueMembers, LeagueMembersProvider } from '../Contexts/LeagueMembersProvider'
import Searchbar from './Searchbar'
import '../Styles/Home.scss'

const Home = () => {
  const { leagueMembers } = useContext(LeagueMembers)

  const members = leagueMembers.map(member => {
    return (
      <div key={member.id} className="league-overview">
        <p>{member.name}</p>
        <p>{member.average_score}</p>
        <p>{member.rounds_played}</p>
      </div>
    )
  })

  const aveScores = leagueMembers.map(member => {
    return <p key={member.id}>{member.ave_score}</p>
  })

  return (
    <div>
      <Searchbar />
      <header className="league-overview">
        <p className="league-overview-header">Name</p>
        <p className="league-overview-header">Average</p>
        <p className="league-overview-header">Rounds</p>
      </header>
      <h1>{members}</h1>
    </div>
  )
}

export default Home
