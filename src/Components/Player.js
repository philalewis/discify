import React, { useState, useContext } from 'react'
import { ScorecardInfo } from '../context'

const Player = (props) => {
  const { scorecard, setScorecard } = useContext(ScorecardInfo)
  const [ score, setScore ] = useState(scorecard.layout.holes[0].par)

  const handlePlus = () => {
    setScore(score + 1)
  }

  const handleMinus = () => {
    score > 1 ? setScore(score - 1) : null
  }

  return (
    <div className="player-score-input" key={props.id}>
      <h3>{props.name}</h3>
      <p>({scorecard.currentHole.players.find(player => {
          return player.id === props.id
        }).totalScore})
      </p>
      <button onClick={event => handleMinus(event)}>-</button>
      <p>SCORE</p>
      <button onClick={event => handlePlus(event)}>+</button>
    </div>
  )
}

export default Player