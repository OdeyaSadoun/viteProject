import React, { useState } from 'react'
import Color from './Color'

const AppM1 = () => {
    const [color, setColor] = useState("gold")
  return (
    <div>
        <h1 style={{color: color}}>WELCOME TO CUSTOM EVENT</h1>
        <Color setColor={setColor}/>
    </div>
  )
}

export default AppM1