import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Myself from './Myself'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <p>App</p>
    
      <Myself/>
    </>
  )
}

export default App
