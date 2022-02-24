import React, {useContext} from 'react'
import { Errors } from '../context'
import '../Styles/ErrorModal.scss'

const ErrorModal = () => {
  const {errorMessage, setErrorMessage} = useContext(Errors)
  console.log(errorMessage);
  if(errorMessage){
  return (
    <div className='modal'>
      <article className='modal-box'>
        <p>{errorMessage}</p>
        <button className='modal-btn' onClick={() => setErrorMessage({error: null})}>OK</button>
      </article>
    </div>
  )} else {
    return(
      <></>
    )
  }
}

export default ErrorModal
