import React from 'react'
import { useLogout } from "../hooks/useLogout";

const Logout = () => {
    // call to hook
    const { logout } = useLogout();
    // example calling to the logout function from the hook
    return (
        <div>
            <a href="#" onClick={() => { logout() }}>Log out</a>

        </div>
    )
}

export default Logout