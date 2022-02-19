import React, { createContext, useEffect } from 'react'
import { Route, Router } from 'react-router-dom'
import Home from './Home'
import './App.css';

// export const DiscContext = createContext({name: 'Discify'})

function App() {
  const [courseName, setCourseName] = useState('')
  
  useEffect(() => {

  }, [])

  return (
    // <DiscContext.Provider value={{ name: 'Discify' }}>
      // <Route exact path='/'>
        <Home />
      // </Route>
    // {/* </DiscContext.Provider> */}
  );
}

export default App;
