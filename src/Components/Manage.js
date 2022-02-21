import React, {useState, useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {addNewPlayer, getAllPlayers} from '../apiCalls'
import { DiscContext } from '../context'
import '../Styles/Manage.scss'


const Manage = () => {
  const [nameInput, setNameInput] = useState('')
  const {discContext, setDiscContext} = useContext(DiscContext)

  const handleChange = (event) => {
    setNameInput(event.target.value)
  } 

  const addPlayer = (event) => {
    event.preventDefault()
    addNewPlayer(nameInput)
    .then(data => {
      setDiscContext({leagueMembers: [...discContext.leagueMembers, data]})
      setNameInput('')
    })
    .catch(error => setDiscContext({error: error}))
  }

  // useEffect(() => {
  //   getAllPlayers()
  //   .then(data => {
  //     setDiscContext({leagueMembers: data})
  //   })
  //   .catch(error => setDiscContext({error: error}))
  // }, [])

  const leagueMembers = discContext.leagueMembers ? discContext.leagueMembers.map(member => {
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
      {leagueMembers}

      <Link to='/'> <button className='home-btn'>DONE</button> </Link>
    </>
  )
}

export default Manage