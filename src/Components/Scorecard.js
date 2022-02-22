import React, { useContext, useState, useEffect } from 'react'
import { ScorecardInfo } from '../context'

const Scorecard = () => {
  const [ scores, setScores ] = useState({})
  const { scorecard, setScorecard } = useContext(ScorecardInfo)
  
  useEffect(() => {
    setScorecard({...scorecard, [scorecard.currentHole]: 1})
    setScores(scorecard.players.map(player => {
      return {
        name: player.name,
        id: player.id,
        totalScore: 0,
        score: scorecard.layout.holes[0].par
      }
    }))
  }, [])

  // const handlePlus = (event) => {
  //   event.preventDefault()
  //   const player = scores.find(player => player.id === event.target.parentNode.key)
  //   setScores([...scores, [player.score]: player.score += 1])
  // }

  // const handleMinus = (event) => {

  // }

  const displayPlayers = () => {
    scores.map(player => {
      return (
        <Player name={player.name} key={player.id} id={player.id} />
      )
    })
  }

  return (
    {displayPlayers}
  )
}

export default Scorecard