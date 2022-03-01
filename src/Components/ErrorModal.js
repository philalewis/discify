import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Errors } from '../Contexts/ErrorsProvider'
import '../Styles/ErrorModal.scss'

const ErrorModal = () => {

  const navigate = useNavigate()
  const {errorMessage, setErrorMessage} = useContext(Errors)

  const errorRedirect = () => {
    setErrorMessage(null)
    navigate('/')
  }

  return(
    <>
      {
        errorMessage &&
        <div className='modal'>
          <article className='modal-box'>
            <p>{errorMessage}</p>
            <button
              className='modal-btn'
              onClick={errorRedirect}
            >OK</button>
          </article>
        </div>
      }
    </>
  )
}

export default ErrorModal
