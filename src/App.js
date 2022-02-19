import React, { createContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import './App.css';
import { DiscContext } from './context'
import Navbar from './Components/Navbar'
import Manage from './Components/Manage'
import Stats from './Components/Stats'
import Scorecard from './Components/Scorecard'
import Courses from './Components/Courses'

const App = () => {
  useEffect(() => {

  }, [])

  return (
    <main>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/manage/' element={<Manage />} />
        <Route exact path='/stats/' element={<Stats />} />
        <Route exact path='/scorecard/' element={<Scorecard />} />
        <Route path='/courses/' element={<Courses />} />
      </Routes>
    </main>
  );
}

export default App;
