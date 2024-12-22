import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Response } from './components/Response'
import { DigitalClk } from './components/DigitalClk'
import { UseStateEX } from './components/UseStateEX'
import { PracticeEx } from './components/PracticeEx'
import { ColorEx } from './components/ColorEx'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    {/* <Response/> */}
    {/* <DigitalClk/> */}
    {/* <UseStateEX/> */}
    {/* <PracticeEx/> */}
    <ColorEx/>
    </>
  )
}

export default App