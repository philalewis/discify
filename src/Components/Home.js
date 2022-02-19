import React, { useContext, useState } from 'react'
import { DiscContext } from '../context'

const Home = () => {
  const { name, scorecard } = useContext(DiscContext)
  
  // const [ name, setName ] = useState('')

  return (
    <div>
      <h1>{name}</h1>
      <p>{scorecard.par}</p>
    </div>
  )
}

export default Home