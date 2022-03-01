import React, { useContext } from 'react'
import { deletePlayer } from '../apiCalls'
import { useNavigate } from 'react-router-dom'
import { Errors } from '../Contexts/ErrorsProvider'
import { LeagueMembers } from '../Contexts/LeagueMembersProvider'
import '../Styles/VerifyDeletionModal.scss'

const VerifyDeletionModal = ({name, id, toggleVerify}) => {

  const { getLeagueMembers } = useContext(LeagueMembers)
  const { setErrorMessage } = useContext(Errors)
  const navigate = useNavigate()

  const removePlayer = () => {
    deletePlayer(id)
    .then (() => {
      getLeagueMembers()
      navigate('/')
    })
    .catch(error => setErrorMessage(error))
  }

  return (
    <div className='verify-deletion-container'>
      <div className='verify-deletion-modal'>
        <h3>Are you sure you want to remove {name} from the league?</h3>
        <div className='verify-button-container'>
          <button className='yes-button' onClick={removePlayer}>YES</button>
          <button className='cancel-button'onClick={toggleVerify}>CANCEL</button>
        </div>
      </div>
    </div>
  )
}

export default VerifyDeletionModal
