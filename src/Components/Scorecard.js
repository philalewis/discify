import React, { useContext, useState, useEffect } from 'react'
import { ScorecardInfo } from '../context'
import Player from './Player'

const Scorecard = () => {
  const { scorecard, setScorecard } = useContext(ScorecardInfo)
  const [ currentHole, setCurrentHole ] = useState({})

  const currentPlayers = () => {
    const result = {}
    scorecard.players.forEach(player => {
      result[player.id] = {
        name: player.name,
        id: player.id,
        score: 0,
        totalScore: 0
      }
    })
    return result
  }

  const changeScore = (id, score) => {
    currentHole.players[id].score = score
    setCurrentHole(currentHole)
  }
  
  useEffect(() => {
    setCurrentHole({
      number: 1,
      players: currentPlayers()
    })
  }, [])

  const displayPlayers = () => {
    return scorecard.players.map(player => {
      return (
        <Player
          name={player.name} 
          key={player.id} 
          id={player.id}
          par={scorecard.layout.holes.find(hole => {
            return hole.hole_number === currentHole.number
          }).par}
          totalScore={currentHole.players[`${player.id}`].totalScore}
          changeScore={changeScore}
        />
      )
    })
  }

  return (
    <div>
      <h2>Hole {currentHole.number}</h2>
      { currentHole.players && displayPlayers() }
      <button>NEXT HOLE</button>
    </div>
  )
}

export default Scorecard