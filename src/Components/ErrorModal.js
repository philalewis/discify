import React, {useContext} from 'react'
import { DiscContext } from '../context'
import '../Styles/ErrorModal.scss'

const ErrorModal = () => {
  const {discContext, setDiscContext} = useContext(DiscContext)

  return (
    <div className='modal'>
      <article className='modal-box'>
        <p>{discContext.error}</p>
        <button className='modal-btn' onClick={() => setDiscContext({error: null})}>OK</button>
      </article>
    </div>
  )
}

export default ErrorModal
