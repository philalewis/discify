import React, { useContext, useState } from 'react'
import { DiscContext } from '../context'
import Searchbar from './Searchbar'

const Home = () => {
  const { discContext } = useContext(DiscContext)

  // const [ input, setInput ] = useState('')

  return (
    <div>
      <Searchbar />
      <h1>{discContext.name}</h1>
      <p>{discContext.scorecard.par}</p>
    </div>
  )
}

export default Home
