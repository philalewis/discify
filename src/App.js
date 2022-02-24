import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import './Styles/App.scss';
import { CourseInfo, ScorecardInfo, LeagueMembers, Errors } from './context'
import Navbar from './Components/Navbar'
import Manage from './Components/Manage'
import Stats from './Components/Stats'
import Scorecard from './Components/Scorecard'
import Courses from './Components/Courses'
import ErrorModal from './Components/ErrorModal'
import SingleCourse from './Components/SingleCourse'
import ScorecardForm from './Components/ScorecardForm'
import { getAllPlayers } from './apiCalls'

const App = () => {
  const [ leagueMembers, setLeagueMembers ] = useState([])
  const [ errorMessage, setErrorMessage ] = useState(null)

  const [ courseInfo, setCourseInfo ] = useState({
    courses: [],
    searchURL: '',
    currentCourse: {}
  })

  const [ scorecard, setScorecard ] = useState({
    courseName: 'West Fork',
    courseId: null,
    roundId: null,
    par: 54,
    holes: 18,
    players: [],
    layout: {},
    currentHole: {
      number: 0,
      players: [{
        id: 1,
        score: 0,
        totalScore: 0
      }]
    },
    inProgress: false, 
    final: {}
  })

  useEffect(() => {
    getAllPlayers()
    .then(data => {
      setLeagueMembers(data)
    })
    .catch(error => setErrorMessage(error))
  }, [])

  return (
    <main>
      <CourseInfo.Provider value={{ courseInfo, setCourseInfo }}>
        <ScorecardInfo.Provider value={{ scorecard, setScorecard }}>
          <LeagueMembers.Provider value={{ leagueMembers, setLeagueMembers }}>
            <Errors.Provider value={{ errorMessage, setErrorMessage }}>
              <Navbar />
              {errorMessage && <ErrorModal />}
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/manage/' element={<Manage />} />
                <Route exact path='/stats/' element={<Stats />} />
                <Route exact path='/scorecard/' element={<Scorecard />} />
                <Route exact path='/setup_scorecard/' element={<ScorecardForm />} />
                <Route path='/courses/' element={<Courses />} />
                <Route exact path='/course/:id' element={<SingleCourse />} />
              </Routes>
            </Errors.Provider>
          </LeagueMembers.Provider>
        </ScorecardInfo.Provider>
      </CourseInfo.Provider>
    </main>
  );
}

export default App;
