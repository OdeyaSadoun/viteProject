import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav className='nav text-bg-secondary p-3'>
        <Link className='link-light px-4' to="/">Home</Link> 
        <Link className='link-light' to="/employee">Employee</Link>
    </nav>
  )
}

export default Header