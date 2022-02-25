import React, { useContext, useState , useEffect } from 'react'
import { LeagueMembers, LeagueMembersProvider } from '../Contexts/LeagueMembersProvider'
import Searchbar from './Searchbar'
import '../Styles/Home.scss'

const Home = () => {
  const { leagueMembers } = useContext(LeagueMembers)

  const members = leagueMembers.map(member => {
    return <p key={member.id}>{member.name}</p>
  })

  return (
    <div>
      <Searchbar />
      <h2 className='home-header'>Leaderboard:</h2>
      <div className='members-container'>
        <h1>{members}</h1>
      </div>
    </div>
  )
}

export default Home
