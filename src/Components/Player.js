import React, { useState, useContext } from 'react'
import { ScorecardInfo } from '../context'

const Player = ({ name, id }) => {
  const { scorecard, setScorecard } = useContext(ScorecardInfo)
// console.log(scorecard.currentHole.players)
  const handlePlus = () => {
    // console.log(scorecard.players[id].score)
    setScorecard(
      ...scorecard, 
      // [scorecard.currentHole.players[id].score]: scorecard.currentHole.players[id].score + 1
    )
  }

  const handleMinus = () => {

  }

  const totalScore = () => {
    return scorecard.currentHole.players[id] && scorecard.currentHole.players[id].totalScore
  }

  return (
    <div className="player-score-input" key={id}>
      <h3>{name}</h3>
      <p>({totalScore()})</p>
      <button onClick={event => handleMinus(event)}>-</button>
      <p>SCORE</p>
      <button onClick={event => handlePlus(event)}>+</button>
    </div>
  )
}

export default Player

// ({scorecard.currentHole.players[id].totalScore})