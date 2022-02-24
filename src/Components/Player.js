import React, { useState, useContext, useEffect } from 'react'
import { ScorecardInfo } from '../Contexts/ScorecardInfoProvider'

const Player = ({ name, id, totalScore, par, changeScore }) => {
  const [ score, setScore ] = useState(par)

  const plus = () => {
    let newScore = score + 1
    setScore(newScore)
    changeScore(id, newScore)
  }

  const minus = () => {
    let newScore = score <= 1 ? 1 : score - 1
    setScore(newScore)
    changeScore(id, newScore)
  }

  return (
    <div className="player-score-input" key={id}>
      <h3>{name} ({totalScore})</h3>
      <button className='minus-btn' onClick={minus}>-</button>
      <p>{score}</p>
      <button className='plus-btn' onClick={plus}>+</button>
    </div>
  )
}

export default Player
