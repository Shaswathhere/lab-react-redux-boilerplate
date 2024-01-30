import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LikeCounter from './LikeCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>
          Like Counter using Redux
      </h1>
      <LikeCounter/>
    </>
  )
}

export default App
