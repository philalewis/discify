import React, { useContext } from 'react'
import { LeagueMembers } from '../Contexts/LeagueMembersProvider'
import Searchbar from './Searchbar'
import '../Styles/Home.scss'

const Home = () => {
  const { leagueMembers } = useContext(LeagueMembers)

  const members = () => {
    leagueMembers.sort((a, b) => a.average_score - b.average_score)

    return leagueMembers.map(member => {
      return (
        <div key={member.id} className='league-member-container'>
          <p>{member.name}</p>
          <p>{member.average_score}</p>
          <p>{member.rounds_played}</p>
        </div>
      )
    })
  }

  return (
    <div>
      <Searchbar />
      <h2 className='home-header'>Leaderboard:</h2>
      <div className='members-container'>
        <div className='leaderboard-header'>
          <p>Name</p>
          <p>Average</p>
          <p>Rounds</p>
        </div>
        {members()}
      </div>
    </div>
  )
}

export default Home
