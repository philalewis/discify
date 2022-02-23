import React, { useContext, useState, useEffect } from 'react'
import { ScorecardInfo } from '../context'
import Player from './Player'

const Scorecard = () => {
  const { scorecard, setScorecard } = useContext(ScorecardInfo)

  const currentPlayers = () => {
    const result = {}
    scorecard.players.forEach(player => {
      // console.log(player)
      result[player.id] = {
        name: player.name,
        id: player.id,
        score: 0,
        totalScore: 0
      }
    })
    console.log(result)
    return result
  }
  
  useEffect(() => {
    setScorecard({...scorecard, currentHole: {
      number: 1,
      players: currentPlayers()
    }})
  }, [])


  const displayPlayers = () => {
    return scorecard.players.map(player => {
      return (
        <Player
          name={player.name} 
          key={player.id} 
          id={player.id}
        />
      )
    })
  }

  return (
    <div>
      { displayPlayers() }
      <button>NEXT HOLE</button>
    </div>
  )
}

export default Scorecard