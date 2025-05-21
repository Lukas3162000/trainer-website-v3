import { useState } from 'react';
import React from 'react';
import NavBar from './components/NavBar';
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
