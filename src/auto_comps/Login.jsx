
import React, { useContext, useRef } from 'react'
import { useLogin } from '../hooks/useLogin'
import { AppContext } from '../context/context';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config';



export default function Login() {
  const {userId, setUserId} = useContext(AppContext);
  const {loginUser, setLoginUser} = useContext(AppContext);

  const {error, login} = useLogin()
  const mailRef = useRef();
  const passRef = useRef();


  const onSub = (e) => {
    e.preventDefault();
    login(mailRef.current.value, passRef.current.value);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.uid);
        setUserId(user.uid);
        setLoginUser(true);
      }
    });
  }


  return (
    <div className='container'>
      <form onSubmit={onSub}>
        <label>Email:</label>
        <input ref={mailRef} type="email" />
        <br/>
        <label>Password:</label>
        <input ref={passRef} type="password" />
        <h3 className='text-danger'>{error}</h3>
        <button>Log in</button>
      </form>
    </div>
  )
}
