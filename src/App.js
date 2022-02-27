import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import './Styles/App.scss';
import { LeagueMembersProvider } from './Contexts/LeagueMembersProvider'
import { CourseInfoProvider } from './Contexts/CourseInfoProvider'
import { ErrorsProvider } from './Contexts/ErrorsProvider'
import { ScorecardInfoProvider } from './Contexts/ScorecardInfoProvider'
import { HoleNumberProvider } from './Contexts/HoleNumberProvider'
import { RoundScoresProvider } from './Contexts/RoundScoresProvider'
import Navbar from './Components/Navbar'
import Manage from './Components/Manage'
import Scorecard from './Components/Scorecard'
import Courses from './Components/Courses'
import ErrorModal from './Components/ErrorModal'
import SingleCourse from './Components/SingleCourse'
import ScorecardForm from './Components/ScorecardForm'
import RoundOverview from './Components/RoundOverview'
import SinglePlayer from './Components/SinglePlayer'

const App = () => {

  return (
    <main>
      <CourseInfoProvider>
        <ErrorsProvider>
          <ScorecardInfoProvider>
            <LeagueMembersProvider>
              <HoleNumberProvider>
                <RoundScoresProvider>
                  <Navbar />
                  <ErrorModal/>
                  <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/manage/' element={<Manage />} />
                    <Route exact path='/scorecard/' element={<Scorecard />} />
                    <Route exact path='/setup_scorecard/' element={<ScorecardForm />} />
                    <Route path='/courses/' element={<Courses />} />
                    <Route exact path='/course/:id' element={<SingleCourse />} />
                    <Route exact path='/round-overview' element={<RoundOverview />} />
                    <Route path='/players/:id' element={<SinglePlayer />}/>
                  </Routes>
                </RoundScoresProvider>
              </HoleNumberProvider>
            </LeagueMembersProvider>
          </ScorecardInfoProvider>
        </ErrorsProvider>
      </CourseInfoProvider>
    </main>
  );
}

export default App;
