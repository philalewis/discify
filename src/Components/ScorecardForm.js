import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import { startRound } from '../apiCalls'
import { LeagueMembers, ScorecardInfo, Errors } from '../context'


const ScorecardForm = () => {
  const [ players, setPlayers ] = useState([])
  const { leagueMembers, setLeagueMembers } = useContext(LeagueMembers)
  const { scorecard, setScorecard } = useContext(ScorecardInfo)
  const {errorMessage, setErrorMessage} = useContext(Errors)

  const options = leagueMembers.map(member => {
    return {
      value: member,
      label: member.name
    }
  })

  const handleChange = event => {
    setScorecard({
        ...scorecard,
        players: [...scorecard.players, event.value]
    })
    setPlayers([...players, event.value])
  }

  const playerNames = players.length > 0 ?
    players.map(player => <p key={player.id}>{player.name}</p>) :
    null

  const handleClick = () => {
    setScorecard({
      ...scorecard,
      inProgress: true
    })
    beginRound()
  }

  const beginRound = () => {
    const roundData = {
      course_id: scorecard.courseId,
      layout_id: scorecard.layout.id,
      player_ids: scorecard.players.map(player => player.id)
    }
    startRound(roundData)
      .then(data => setScorecard({...scorecard, roundId: data.id}))
      .catch(error => setErrorMessage(error))
  }

  return (
    <>
      <h2>Choose Players</h2>
      <Select options={options} onChange={event => handleChange(event)}/>
      {playerNames}
      <Link to='/scorecard/'>
        <button className='start-round-btn' onClick={handleClick}>START ROUND</button>
      </Link>
    </>
  )
}

export default ScorecardForm
