import React, { useState, useContext, useEffect } from 'react'
import { ScorecardInfo } from '../Contexts/ScorecardInfoProvider'
import '../Styles/Player.scss'

const Player = ({ name, id, totalScore, par, changeScore, score }) => {

  const plus = () => {
    let newScore = score + 1
    changeScore(id, newScore)
  }

  const minus = () => {
    let newScore = score <= 1 ? 1 : score - 1
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
