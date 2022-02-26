import React from 'react'
import '../Styles/EndCurrentRoundModal.scss'


const EndCurrentRoundModal = ({toggleConfirm, endCurrentRound}) => {

  return (
    <div className='confirm-deletion-container'>
      <div className='confirm-deletion-modal'>
        <h3>Are you sure you want to end the round early?</h3>
        <div className='confirm-button-container'>
          <button className='yes-button' onClick={endCurrentRound}>YES</button>
          <button className='cancel-button'onClick={toggleConfirm}>CANCEL</button>
        </div>
      </div>
    </div>
  )
}

export default EndCurrentRoundModal;
