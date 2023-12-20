import React, { useContext } from 'react'
import { useLogout } from "../hooks/useLogout";
import { AppContext } from '../context/context';

const Logout = () => {
    // call to hook
    const { logout } = useLogout();
    const { setLoginUser } = useContext(AppContext);
    // example calling to the logout function from the hook
    return (
        <div>
            <a href="#" onClick={() => { logout(); setLoginUser(false) }}>Log out</a>

        </div>
    )
}

export default Logout