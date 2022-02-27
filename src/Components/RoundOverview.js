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
      <div className='round-players-container'>
        <CourseHeader
          name={courseInfo.currentCourse.name}
          city={courseInfo.currentCourse.city}
          state={courseInfo.currentCourse.state}
        />
        <p className='round-par'><span className="bold">Par:</span> {location.state.total_par}</p>
        <p className='round-date'><span className="bold">Date:</span> {location.state.date}</p>
        {playerInfo()}
        <div className="go-home-container">
          <Link to='/'><button className="go-home">DONE</button></Link>
        </div>
      </div>
    </div>
  )
}

export default RoundOverview
