import React, { useContext } from 'react'
import { AppContext } from '../context/context'

const Home = () => {
    const {number} = useContext(AppContext)
  return (
    <div>
        Home {number}
    </div>
  )
}

export default Home