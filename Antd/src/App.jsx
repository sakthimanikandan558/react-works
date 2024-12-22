import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AntFiles from './AntFiles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AntFiles/>
    </>
  )
}

export default App
