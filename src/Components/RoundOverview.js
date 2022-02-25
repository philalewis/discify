import React from 'react'
import { useLocation } from 'react-router-dom'

const RoundOverview = () => {
  const location = useLocation()
  const sortPlayers = () => {
    location.state.scores.sort((a, b) => a.total_score - b.total_score)
  }

  const playerInfo = () => {
    sortPlayers()
    return location.state.scores.map(player => {
      return (
        <div>
          <h3>{player.name}</h3>
          <p>{player.total_score}</p>
          <p>({player.score})</p>
        </div>
      )
    })
  }

  return (
    <div>
      <h2>{location.state.course_name}</h2>
      <p>Par: {location.state.total_par}</p>
      <p>Date: {location.state.date}</p>
      {playerInfo()}
    </div>
  )
}

export default RoundOverview