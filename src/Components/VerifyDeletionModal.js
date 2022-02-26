import React, { useContext } from 'react'
import { deletePlayer } from '../apiCalls'
import { useNavigate } from 'react-router-dom'
import { Errors } from '../Contexts/ErrorsProvider'

const VerifyDeletionModal = ({name, id, toggleVerify}) => {

  const { errorMessage, setErrorMessage } = useContext(Errors)
  const navigate = useNavigate()

  const removePlayer = () => {
    deletePlayer(id)
    .then (() => navigate('/'))
    .catch(error => setErrorMessage(error))
  }

  return (
    <div>
      <h3>Are you sure you want to remove {name} from the league?</h3>
      <button onClick={removePlayer}>YES</button>
      <button onClick={toggleVerify}>CANCEL</button>
    </div>
  )
}

export default VerifyDeletionModal
