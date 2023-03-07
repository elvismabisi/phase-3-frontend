import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'

import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import Registration from './components/Registration'
import HomePage from './components/HomePage'
function App() {
 return (
  <>
  <Router>
      <div>
          <Routes>
              <Route path="/" element={ <LandingPage/> } />
              <Route path="/login" element={ <LoginPage/> } />
              <Route path="/register" element={ <Registration />} />
              <Route path="/home" element={< HomePage/> } />
      
          </Routes>
      </div>
  </Router>
 
  </>
 );
}
export default App;