import React, { useContext, useState } from 'react'
import { DiscContext } from '../context'
import Searchbar from './Searchbar'

const Home = () => {
  const { name, scorecard } = useContext(DiscContext)
  
  // const [ input, setInput ] = useState('')

  return (
    <div>
      <Searchbar />
      <h1>{name}</h1>
      <p>{scorecard.par}</p>
    </div>
  )
}

export default Home