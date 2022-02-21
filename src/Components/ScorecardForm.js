import React, { useContext } from 'react'
import Select from 'react-select'
import { DiscContext } from './context'

const ScorecardForm = () => {
  const [ discContext, setDiscContext ] = useContext(DiscContext)

  return (
    <>
      <h2>Choose Players</h2>
      <Select />
    </>
  )
}

export default ScorecardForm