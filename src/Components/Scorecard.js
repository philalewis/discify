import React, { useContext, useState, useEffect } from 'react'
import { ScorecardInfo } from '../Contexts/ScorecardInfoProvider'
import { CourseInfo } from '../Contexts/CourseInfoProvider'
import { Errors } from '../Contexts/ErrorsProvider'
import Player from './Player'
import { scoreAHole, endRound } from '../apiCalls'
import {useNavigate} from 'react-router-dom'

const Scorecard = () => {
  const { scorecard, setScorecard } = useContext(ScorecardInfo)
  const [ currentHole, setCurrentHole ] = useState({par: 3, number: 1, distance: 0})
  const {errorMessage, setErrorMessage} = useContext(Errors)
  const [inProgress, setInProgress] = useState(true)
  const [scores, setScores] = useState([])
  const {courseInfo, setCourseInfo} = useContext(CourseInfo)
  const navigate = useNavigate()
  
  
  useEffect(() => {
    setCurrentHole({
      number: 1,
      par: courseInfo.currentCourse.layout.holes.find(hole => hole.hole_number === 1).par,
      distance: courseInfo.currentCourse.layout.holes.find(hole => hole.hole_number === 1).distance
    })
  }, []) 
    // setScorecard(scorecard.map(player => {
    //   return {
    //     ...player,
    //     score: 0
    //   }
    // }))
  // }, [])
  
  const displayPlayers = () => {
    scorecard.sort((a,b) => a.id - b.id)
    return scorecard.map(player => {
      return (
        <Player
          name={player.name}
          key={player.id}
          id={player.id}
          par={courseInfo.currentCourse.layout.holes.find(hole => {
            return hole.hole_number === currentHole.number
          }).par}
          totalScore={findTotalScore(player.id)}
          changeScore={changeScore}
        />
      )
    })
  }

  const findTotalScore = (id) => {
    let playerScores = scores.filter(score => score.player_id === id) 
      return playerScores.length > 0 ? playerScores.reduce((acc, player) => {
        acc += player.score
        return acc
      }, 0) : 0
  }

  const checkLastHole = () => {
    return inProgress ?
      <button className='next-hole-btn' onClick={postHoleScores}>NEXT HOLE</button> :
      <button className='end-round-btn' onClick={postHoleScores}>END ROUND</button>
  }

  // const currentPlayers = () => {
  //   const result = {}
  //   scorecard.players.forEach(player => {
  //     result[player.id] = {
  //       name: player.name,
  //       id: player.id,
  //       score: scorecard.layout.holes[0].par,
  //       totalScore: 0
  //     }
  //   })
  //   return result
  // }

  const changeScore = (id, score) => {
    let player = scorecard.find(player => player.id === id)
    console.log(player);
    player.score = score
    const otherPlayers = scorecard.filter(player => player.id !== id)
    setScorecard([...otherPlayers, player])
    setCurrentHole(currentHole)
  }

  const nextHole = () => {
    const hole = courseInfo.currentCourse.layout.holes.find(hole => hole.hole_number === currentHole.number + 1)
    if(hole.hole_number === courseInfo.currentCourse.layout.holes.length){
      setInProgress(false)
    }
    setCurrentHole({
      number: hole.hole_number,
      par: hole.par,
      distance: hole.distance
    })
  }

  // const updatePlayerScores = (prevHoleScores) => {
  //   const updatedPlayers = {}
  //   prevHoleScores.forEach(player => {
  //     updatedPlayers[player.player_id] = {
  //       name: currentHole.players[player.player_id].name,
  //       id: currentHole.players[player.player_id].id,
  //       score: 0,
  //       totalScore: player.score + currentHole.players[player.player_id].totalScore
  //     }
  //   })
  //   return updatedPlayers
  // }

  const postHoleScores = () => {
    const body = {
      hole: {
        hole_number: currentHole.number,
        player_scores: scorecard.map(player => {
          return {
            player_id: player.id,
            strokes: player.score
          }
        })
      }
    }
    scoreAHole(body, courseInfo.roundId)
    .then(data => {
      setScores(data.scores)
      inProgress ? nextHole() : endCurrentRound()
    })
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

  return (
    <div>
      <h2>Hole {currentHole.number}</h2>
      { scorecard.length && displayPlayers() }
      {checkLastHole()}
    </div>
  )
}

export default Scorecard
