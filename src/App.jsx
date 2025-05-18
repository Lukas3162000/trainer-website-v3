import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className='text-red-500/75 hover:text-blue-300'>Hallo, ich bin die app.jsx!!!!</p>
    </>
  )
}

export default App
