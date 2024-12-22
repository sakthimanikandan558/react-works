import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './components/NavBar'
import { SideBar } from './components/SideBar'

function App() {

  return (
    <>
    <NavBar/>
    <SideBar/>
    </>
  )
}

export default App
