import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import { LeagueMembers, ScorecardInfo } from '../context'

const ScorecardForm = () => {
  const [ players, setPlayers ] = useState([])
  const { leagueMembers, setLeagueMembers } = useContext(LeagueMembers)
  const { scorecard, setScorecard } = useContext(ScorecardInfo)

  const options = leagueMembers.map(member => {
    return {
      value: member,
      label: member.name
    }
  })

  const handleChange = event => {
    setScorecard({ ...scorecard, players: [...scorecard.players, event.value] })
  }

  const playerNames = leagueMembers.length > 0 ?
    leagueMembers.map(player => <p key={player.id}>{player.name}</p>) :
    null

  const handleClick = () => {
    setScorecard({
      ...scorecard,
      inProgress: true
    })
  }

  return (
    <>
      <h2>Choose Players</h2>
      <Select options={options} onChange={event => handleChange(event)}/>
      {playerNames}
      <Link to='/scorecard/'>
        <button onClick={handleClick}>START ROUND</button>
      </Link>
    </>
  )
}

export default ScorecardForm