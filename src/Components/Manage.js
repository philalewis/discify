import React, {useState, useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {addNewPlayer, getAllPlayers} from '../apiCalls'
import { LeagueMembers, Errors } from '../context'
import '../Styles/Manage.scss'


const Manage = () => {
  const [nameInput, setNameInput] = useState('')
  const { leagueMembers, setLeagueMembers } = useContext(LeagueMembers)
  const { errorMessage, setErrorMessage } = useContext(Errors)

  const handleChange = (event) => {
    setNameInput(event.target.value)
  }

  const addPlayer = (event) => {
    event.preventDefault()
    addNewPlayer(nameInput)
    .then(data => {
      setLeagueMembers([...leagueMembers, data])
      setNameInput('')
    })
    .catch(error => setErrorMessage(error))
  }

  const playerNames = leagueMembers.length > 0 ? leagueMembers.map(member => {
    return (
      <p key={member.id}>{member.name}</p>
    )
  }) : null

  return (
    <>
      <form>
        <input
          type='text'
          placeholder='Name'
          value={nameInput}
          onChange={event => handleChange(event)}
        />

        <button className='add-player-btn' onClick={(event) => addPlayer(event)}>ADD</button>
      </form>
      { playerNames }
      <Link to='/'> <button className='home-btn'>DONE</button> </Link>
    </>
  )
}

export default Manage
