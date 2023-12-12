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
import AppM2 from './hw10_12_23/mission2/AppM2'
import AppM4 from './hw10_12_23/mission4/AppM4'
import AppM3 from './hw10_12_23/mission3/AppM3'
import AppAtlas from './hw10_12_23/mission5/appAtlas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <AppM4/>
    </div>
  )
}

export default App
