import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import {Route, Routes } from 'react-router-dom'
import Welcome from './components/Welcome'

function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/welcome' element={<Welcome/>}/>
      </Routes>

    </>
  )
}

export default App
