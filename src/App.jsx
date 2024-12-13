import { useState, useEffect } from 'react'
import { Nav } from './components/Nav'
import { GetAllStarships } from './services/sw-api'
import './App.css'

function App() {
  
  
  return (
    <>
      <Nav/>
      <GetAllStarships/>
    </>
  )
};

export default App
