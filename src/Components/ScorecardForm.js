import React, { useContext, useState } from 'react'
import Select from 'react-select'
import { DiscContext } from '../context'

const ScorecardForm = () => {
  const [ players, setPlayers ] = useState([])
  const { discContext, setDiscContext } = useContext(DiscContext)

  const options = discContext.leagueMembers.map(member => {
    return {
      value: member,
      label: member.name
    }
  })

  const handleChange = (event) => {
    console.log(event)
    setPlayers([ ...players, event.value ])
  }

  const playerNames = players.length > 0 ?
    players.map(player => <p key={player.id}>{player.name}</p>) :
    null

  return (
    <>
      <h2>Choose Players</h2>
      <Select options={options} onChange={event => handleChange(event)}/>
      {playerNames}
    </>
  )
}

export default ScorecardForm