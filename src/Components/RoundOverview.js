import React, { useContext } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { LeagueMembers } from '../Contexts/LeagueMembersProvider'
import { CourseInfo } from '../Contexts/CourseInfoProvider'
import '../Styles/RoundOverview.scss'
import CourseHeader from './CourseHeader'

const RoundOverview = () => {
  const location = useLocation()
  const { leagueMembers, setLeagueMembers} = useContext(LeagueMembers)
  const sortPlayers = () => {
    location.state.scores.sort((a, b) => a.total_score - b.total_score)
  }
  const {courseInfo, setCourseInfo} = useContext(CourseInfo)

  const findPlayerName = (id) => {
    return leagueMembers.find(member => member.id === id).name
  }

  const playerInfo = () => {
    sortPlayers()
    return location.state.scores.map(player => {
      return (
        <div className='player-line-container' key={player.player_id}>
          <h3>{findPlayerName(parseInt(player.player_id))}</h3>
          <p className='player-total'>{player.total_score}</p>
          <p className='player-score'>({player.score})</p>
        </div>
      )
    })
  }

  return (
    <div>
      <CourseHeader
        name={courseInfo.currentCourse.name}
        city={courseInfo.currentCourse.city}
        state={courseInfo.currentCourse.state}
      />
      <p className='round-par'>Par: {location.state.total_par}</p>
      <p className='round-date'>Date: {location.state.date}</p>
      <div className='round-players-container'>
        {playerInfo()}
      <Link to='/'><button className="go-home">DONE</button></Link>
      </div>
    </div>
  )
}

export default RoundOverview
