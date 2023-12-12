import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppHw from './AppHw'
import React from 'react'
import AppRoutes from './comps_routes/AppRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <AppRoutes/>
  </React.Fragment>
  )
}

export default App
