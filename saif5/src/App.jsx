import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RefHooks from './useRef_hook'
import Unccom from './UNC'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <RefHooks/> */}
        <Unccom/>
      </div>
    </>
  )
}

export default App
