import React, { useContext, useState, useEffect } from 'react'
import { ScorecardInfo } from '../Contexts/ScorecardInfoProvider'
import { Errors } from '../Contexts/ErrorsProvider'
import Player from './Player'
import { scoreAHole, endRound } from '../apiCalls'
import {useNavigate} from 'react-router-dom'

const Scorecard = () => {
  const { scorecard, setScorecard } = useContext(ScorecardInfo)
  const [ currentHole, setCurrentHole ] = useState({})
  const {errorMessage, setErrorMessage} = useContext(Errors)
  const [inProgress, setInProgress] = useState(true)
  const navigate = useNavigate()

  const currentPlayers = () => {
    const result = {}
    scorecard.players.forEach(player => {
      result[player.id] = {
        name: player.name,
        id: player.id,
        score: scorecard.layout.holes[0].par,
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
      players: currentPlayers(),
      par: scorecard.layout.holes.find(hole => hole.hole_number === 1).par,
      distance: scorecard.layout.holes.find(hole => hole.hole_number === 1).distance
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

  const nextHole = (prevHoleScores) => {
    const hole = scorecard.layout.holes.find(hole => hole.hole_number === currentHole.number + 1)
    if(hole.hole_number === scorecard.layout.holes.length){
      setInProgress(false)
    }
    setCurrentHole({
      number: hole.hole_number,
      players: updatePlayerScores(prevHoleScores),
      par: hole.par,
      distance: hole.distance
    })
  }

  const updatePlayerScores = (prevHoleScores) => {
    const updatedPlayers = {}
    prevHoleScores.forEach(player => {
      updatedPlayers[player.player_id] = {
        name: currentHole.players[player.player_id].name,
        id: currentHole.players[player.player_id].id,
        score: 0,
        totalScore: player.score + currentHole.players[player.player_id].totalScore
      }
    })
    return updatedPlayers
  }

  const postHoleScores = () => {
    const currentPlayers = Object.keys(currentHole.players)
    const playerScores = currentPlayers.map(player_id => {
      return {
        player_id: currentHole.players[player_id].id,
        strokes: currentHole.players[player_id].score
      }
    })

    const body = {
      hole: {
        hole_number: currentHole.number,
        player_scores: playerScores
      }
    }
    scoreAHole(body, scorecard.roundId)
    .then(data => nextHole(data.scores))
    .catch(error => setErrorMessage(error))
  }

  const postFinalScores = () => {
    const currentPlayers = Object.keys(currentHole.players)
    const playerScores = currentPlayers.map(player_id => {
      return {
        player_id: currentHole.players[player_id].id,
        strokes: currentHole.players[player_id].score
      }
    })

    const body = {
      hole: {
        hole_number: currentHole.number,
        player_scores: playerScores
      }
    }
    scoreAHole(body, scorecard.roundId)
    .then(() =>  endCurrentRound())
    .catch(error => setErrorMessage(error))
  }

  const endCurrentRound = () => {
    endRound(scorecard.roundId)
    .then(data => {
      setScorecard({
        ...scorecard,
        final: data
      })
      navigate('/round-overview')
    })
    .catch(error => setErrorMessage(error))
  }

  const checkLastHole = () => {
    return inProgress ?
      <button className='next-hole-btn' onClick={postHoleScores}>NEXT HOLE</button> :
      <button className='end-round-btn' onClick={postFinalScores}>END ROUND</button>
  }

  return (
    <div>
      <h2>Hole {currentHole.number}</h2>
      { currentHole.players && displayPlayers() }
      {checkLastHole()}
    </div>
  )
}

export default Scorecard
