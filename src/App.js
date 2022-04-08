import React from 'react'
import './App.css'
import Home from './components/pages/Home'
import Navbars from './components/Navbars'

const App = () => {
  return (
    <div className='App'>
      <Navbars/>
      <Home/>
    </div>
  )
}

export default App