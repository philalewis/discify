import React, { createContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import './Styles/App.scss';
import { DiscContext } from './context'
import Navbar from './Components/Navbar'
import Manage from './Components/Manage'
import Stats from './Components/Stats'
import Scorecard from './Components/Scorecard'
import Courses from './Components/Courses'
import ErrorModal from './Components/ErrorModal'

const App = () => {
  const [ discContext, setDiscContext ] = useState({
    name: 'Discify',
    scorecard: {
      courseName: 'West Fork',
      par: 54,
      holes: 18,
    },
    courses: [],
    error: null
  })

  useEffect(() => {

  }, [])

  return (
    <main>
      <DiscContext.Provider value={{ discContext, setDiscContext }}>
        <Navbar />
        {discContext.error && <ErrorModal />}
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/manage/' element={<Manage />} />
          <Route exact path='/stats/' element={<Stats />} />
          <Route exact path='/scorecard/' element={<Scorecard />} />
          <Route path='/courses/' element={<Courses />} />
        </Routes>
      </DiscContext.Provider>
    </main>
  );
}

export default App;
