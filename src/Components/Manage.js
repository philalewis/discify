import React, {useState, useContext, useEffect} from 'react'
import {addNewPlayer, getAllPlayers} from '../apiCalls'
import { DiscContext } from '../context'


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
    })
  }

  useEffect(() => {
    getAllPlayers()
    .then(data => {
      setDiscContext({leagueMembers: data})
    })
  }, [])

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
    </>
  )
}

export default Manage