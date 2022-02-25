import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import { startRound } from '../apiCalls'
import { LeagueMembers } from '../Contexts/LeagueMembersProvider'
import { ScorecardInfo } from '../Contexts/ScorecardInfoProvider'
import { CourseInfo } from '../Contexts/CourseInfoProvider'
import { Errors, ErrorsProvider } from '../Contexts/ErrorsProvider'


const ScorecardForm = () => {
  const { leagueMembers, setLeagueMembers } = useContext(LeagueMembers)
  const { scorecard, setScorecard } = useContext(ScorecardInfo)
  const {errorMessage, setErrorMessage} = useContext(Errors)
  const {courseInfo, setCourseInfo} = useContext(CourseInfo)

  const options = leagueMembers.map(member => {
    return {
      value: member,
      label: member.name
    }
  })

  const handleChange = event => {
    setScorecard([...scorecard, {
      ...event.value,
      score: 0,
      totalScore: 0
    }])
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
    startRound(roundData)
      .then(data => setCourseInfo({...courseInfo, roundId: data.id}))
      .catch(error => setErrorMessage(error))
  }

  return (
    <>
      <h2>Choose Players</h2>
      <Select options={options} onChange={event => handleChange(event)}/>
      {playerNames}
      <Link to='/scorecard/'
        className='start-round-btn'
        onClick={beginRound}
      >
        <button className='start-round-button'>START ROUND</button>
      </Link>
    </>
  )
}

export default ScorecardForm
