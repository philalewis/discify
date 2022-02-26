import React, { useContext, useState, useEffect } from 'react'
import { ScorecardInfo } from '../Contexts/ScorecardInfoProvider'
import { CourseInfo } from '../Contexts/CourseInfoProvider'
import { Errors } from '../Contexts/ErrorsProvider'
import { HoleNumber } from '../Contexts/HoleNumberProvider'
import { RoundScores } from '../Contexts/RoundScoresProvider'
import Player from './Player'
import { scoreAHole, endRound } from '../apiCalls'
import { useNavigate, Link } from 'react-router-dom'
import '../Styles/Scorecard.scss'
import CourseHeader from './CourseHeader'
import EndCurrentRoundModal from './EndCurrentRoundModal'

const Scorecard = () => {
  const { scorecard, setScorecard } = useContext(ScorecardInfo)
  const [ currentHole, setCurrentHole ] = useState({par: 3, number: 1, distance: 0})
  const { holeNumber, setHoleNumber } = useContext(HoleNumber)
  const { errorMessage, setErrorMessage } = useContext(Errors)
  const [ inProgress, setInProgress ] = useState(true)
  const { scores, setScores } = useContext(RoundScores)
  const { courseInfo, setCourseInfo } = useContext(CourseInfo)
  const [ confirm, setConfirm ] = useState(false)
  const navigate = useNavigate()
  
  const toggleConfirm = () => {
    setConfirm(!confirm)
  }

  useEffect(() => {
    if (!scorecard.length) {
      return navigate('/')
    }
    const hole = courseInfo.currentCourse.layout.holes.find(hole => hole.hole_number === holeNumber)
    setCurrentHole({
      number: hole.hole_number,
      par: hole.par,
      distance: hole.distance
    })
    const resetScores = scorecard.map(player => {
      return {
        ...player,
        score: hole.par
      }
    })
    setScorecard(resetScores)
    if(holeNumber === courseInfo.currentCourse.layout.holes.length){
      setInProgress(false)
    }
    console.log(scorecard)
  }, [holeNumber])

  const displayPlayers = () => {
    console.log(scorecard)
    scorecard.sort((a,b) => a.id - b.id)
    return scorecard.map(player => {
      return (
        <Player
          name={player.name}
          key={player.id}
          id={player.id}
          par={courseInfo.currentCourse.layout.holes.find(hole => {
            return hole.hole_number === holeNumber
          }).par}
          totalScore={findTotalScore(player.id)}
          score={player.score}
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

  const changeScore = (id, score) => {
    let player = scorecard.find(player => player.id === id)
    player.score = score
    const otherPlayers = scorecard.filter(player => player.id !== id)
    setScorecard([...otherPlayers, player])
    setCurrentHole(currentHole)
  }

  const nextHole = () => {
    setHoleNumber(holeNumber + 1)
  }

  const postHoleScores = () => {
    const body = {
      hole: {
        hole_number: currentHole.number,
        player_scores: scorecard.map(player => {
          return {
            player_id: player.id,
            strokes: player.score === 0 ?
              currentHole.par :
              player.score
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
    endRound(courseInfo.roundId)
    .then(data => {
      setScorecard([])
      navigate('/round-overview', {state: data})
    })
    .catch(error => setErrorMessage(error))
  }

  return (
    <div>
      {
        confirm &&
        <EndCurrentRoundModal
          toggleConfirm={toggleConfirm}
          endCurrentRound={endCurrentRound}
        />
      }
      <CourseHeader
        name={courseInfo.currentCourse.name}
        city={courseInfo.currentCourse.city}
        state={courseInfo.currentCourse.state}
      />
      <h2 className='hole-number'>Hole {currentHole.number}</h2>
      <p className='distance'>{currentHole.distance} ft</p>
      <p className="par">Par  {currentHole.par}</p>
      <div className='player-score-container'>
        { scorecard.length && displayPlayers() }
        {checkLastHole()}
        <button onClick={toggleConfirm}>End round early</button>
      </div>
    </div>
  )
}

export default Scorecard
