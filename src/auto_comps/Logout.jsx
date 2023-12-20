import React, { useContext } from 'react'
import { useLogout } from "../hooks/useLogout";
import { AppContext } from '../context/context';

const Logout = () => {
    const { logout } = useLogout();
    const { setLoginUser } = useContext(AppContext);
    return (
        <div>
            <a href="#" onClick={() => { logout(); setLoginUser(false) }}>Log out</a>

        </div>
    )
}

export default Logout