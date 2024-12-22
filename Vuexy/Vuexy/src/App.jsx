import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'

function App() {

  return (
    <>
        <div className='flex'>
        <Sidebar/>
        <MainContent/>
        </div>
    </>
  )
}

export default App
