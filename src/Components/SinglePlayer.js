import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getSinglePlayer } from '../apiCalls'
import VerifyDeletionModal from './VerifyDeletionModal'

const SinglePlayer = () => {

  const [ player, setPlayer] = useState({})
  const [ verify, setVerify ] = useState(false)
  const params = useParams()
  const toggleVerify = () => {
    setVerify(!verify)
  }

  useEffect(() => {
    getSinglePlayer(params.id)
    .then(data => {
      setPlayer(data)
    })
  }, [])

  return (
    <div>
      {
        verify &&
        <VerifyDeletionModal
          name={player.name}
          id={player.id}
          toggleVerify={toggleVerify}
        />
      }
      <h2>{player.name}</h2>
      <p>Average Score: {player.average_score}</p>
      <p>Rounds Played: {player.rounds_played}</p>
      <button onClick={toggleVerify}>REMOVE PLAYER FROM LEAGUE</button>
    </div>
  )
}

export default SinglePlayer
