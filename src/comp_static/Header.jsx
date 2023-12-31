import React from 'react'
import { Link } from 'react-router-dom'
import Logout from '../auto_comps/Logout'
import { AppContext } from '../context/context'
import { useContext } from 'react'

const Header = () => {
    const { loginUser } = useContext(AppContext);
    return (
        <header className='container-fluid bg-danger text-white'>
            <div className='container'>
                <div className='d-flex align-item-center justify-content-between'>
                    <nav className='nav col-auto m-2'>
                        <ul>
                            <li>
                                <Link to="/"><strong>Home</strong></Link>
                            </li>
                            {!loginUser && <li>
                                <Link to="/users/login">Login</Link>
                            </li>}
                            {!loginUser && <li>
                                <Link to="/users/signup">SignUp</Link>
                            </li>}

                            {loginUser && <li>
                                <Link to="/resume/add">Add new resume</Link>
                            </li>}
                            {loginUser && <li>
                                <Link to="/resume/showall">Show your resume</Link>
                            </li>}
                        </ul>

                    </nav>
                    {loginUser && <Logout />}
                </div>
            </div>
        </header>
    )
}

export default Header