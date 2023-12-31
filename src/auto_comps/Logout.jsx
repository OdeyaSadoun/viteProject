import React, { useContext } from 'react'
import { useLogout } from "../hooks/useLogout";
import { AppContext } from '../context/context';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const { logout } = useLogout();
    const { setLoginUser } = useContext(AppContext);
    const nav = useNavigate()
    return (
        <div>
            <button className='btn btn-light my-1' onClick={() => {
                logout();
                setLoginUser(false);
                nav('./')

            }}>Log out</button>

        </div>
    )
}

export default Logout