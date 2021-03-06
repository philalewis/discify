import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import { startRound } from '../apiCalls'
import { LeagueMembers } from '../Contexts/LeagueMembersProvider'
import { ScorecardInfo } from '../Contexts/ScorecardInfoProvider'
import { CourseInfo } from '../Contexts/CourseInfoProvider'
import { Errors } from '../Contexts/ErrorsProvider'
import { RoundScores } from '../Contexts/RoundScoresProvider'
import '../Styles/ScoreCardForm.scss'

const ScorecardForm = () => {
  const { leagueMembers } = useContext(LeagueMembers)
  const { scorecard, setScorecard } = useContext(ScorecardInfo)
  const { setErrorMessage } = useContext(Errors)
  const { courseInfo, setCourseInfo } = useContext(CourseInfo)
  const { setScores } = useContext(RoundScores)
  const [ options, setOptions ] = useState([])

  useEffect(() => {
    setOptions(leagueMembers.map(member => {
      return {
        value: member,
        label: member.name
      }
    }))
  }, [])

  const handleChange = event => {
    const newOptions = options.filter(option => {
      return option.label !== event.value.name
    })

    setScorecard([...scorecard, {
      ...event.value,
      score: 0,
      totalScore: 0
    }])
    setOptions(newOptions)
  }

  const playerNames = scorecard.length > 0 ?
    scorecard.map(player => <p key={player.id}>{player.name}</p>) :
    null

  const beginRound = () => {
    const roundData = {
      course_id: courseInfo.currentCourse.id,
      layout_id: courseInfo.currentCourse.layout.id,
      player_ids: scorecard.map(player => player.id)
    }
    setScores(scorecard.map(player => {
      return {
        ...player,
        score: 0
      }
    }))
    startRound(roundData)
      .then(data => setCourseInfo({...courseInfo, roundId: data.id}))
      .catch(error => setErrorMessage(error))
  }

  return (
    <div className="choose-players-container">
      <h2>Choose Players</h2>
      <Select options={options} onChange={event => handleChange(event)}/>
      <div className="player-names">
        {playerNames}
      </div>
      <div className="round-button-container">
        <Link to='/scorecard/'
          className='start-round-btn'
          onClick={beginRound}
        >
          <button className='start-round-button'>START ROUND</button>
        </Link>
      </div>
    </div>
  )
}

export default ScorecardForm
