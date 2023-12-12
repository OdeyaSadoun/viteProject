import React, { useContext } from 'react'
import { AppContext } from '../context/context'

const About = () => {
    const {number} = useContext(AppContext);
  return (
    <div>
        about: {number}
    </div>
  )
}

export default About