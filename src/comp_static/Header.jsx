import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='container-fluid bg-dark text-white'>
        <div className='container'>
            <div className='row align-item-center'>
                <div className='col-auto'>
                    <h2>My Logo</h2>
                </div>
                <nav className='nav col-auto'>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/users/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/users/signup">SignUp</Link>
                        </li>
                                             
                        <li>
                            <Link to="/resume">Resume</Link>
                        </li>

                    </ul>

                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header