import React from 'react'
import '../Styles/Player.scss'

const Player = ({ name, id, totalScore, changeScore, score }) => {

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
      <div className="name-container">
        <h3>{name} ({totalScore})</h3>
      </div>
      <div className="navy-btn-container">
        <button className='minus-btn' onClick={minus}>-</button>
      </div>
      <div className="score-container">
        <p>{score}</p>
      </div>
      <div className="navy-btn-container">
        <button className='plus-btn' onClick={plus}>+</button>
      </div>
    </div>
  )
}

export default Player
