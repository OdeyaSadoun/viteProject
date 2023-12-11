import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Toggle from './Toggle'
import AppDate from './AppDate'
import Color from './Color'
import AppTV from './appTV'
import AppWeather from './weathwe_comp/appWeather'
import AppM1 from './hw10_12_23/mission1/AppM1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <AppM1/>
    </div>
  )
}

export default App
