import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import './Styles/App.scss';
import { LeagueMembersProvider, LeagueMembers } from './Contexts/LeagueMembersProvider'
import { CourseInfoProvider, CourseInfo } from './Contexts/CourseInfoProvider'
import { ErrorsProvider, Errors } from './Contexts/ErrorsProvider'
import { ScorecardInfoProvider, ScorecardInfo } from './Contexts/ScorecardInfoProvider'
import Navbar from './Components/Navbar'
import DropdownMenu from './Components/DropdownMenu'
import Manage from './Components/Manage'
import Stats from './Components/Stats'
import Scorecard from './Components/Scorecard'
import Courses from './Components/Courses'
import ErrorModal from './Components/ErrorModal'
import SingleCourse from './Components/SingleCourse'
import ScorecardForm from './Components/ScorecardForm'
import RoundOverview from './Components/RoundOverview'


const App = () => {

  return (
    <main>
      <CourseInfoProvider>
        <ErrorsProvider>
          <ScorecardInfoProvider>
            <LeagueMembersProvider>
              <Navbar />
              <ErrorModal />
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/manage/' element={<Manage />} />
                <Route exact path='/stats/' element={<Stats />} />
                <Route exact path='/scorecard/' element={<Scorecard />} />
                <Route exact path='/setup_scorecard/' element={<ScorecardForm />} />
                <Route path='/courses/' element={<Courses />} />
                <Route exact path='/course/:id' element={<SingleCourse />} />
                <Route exact path='/round-overview' element={<RoundOverview />} />
              </Routes>
            </LeagueMembersProvider>
          </ScorecardInfoProvider>
        </ErrorsProvider>
      </CourseInfoProvider>
    </main>
  );
}

export default App;
