import React, { useContext, useState } from 'react'
import { DiscContext } from '../context'
import Searchbar from './Searchbar'

const Home = () => {
  const { discContext } = useContext(DiscContext)

  return (
    <div>
      <Searchbar />
      <h1>{discContext.name}</h1>
    </div>
  )
}

export default Home
