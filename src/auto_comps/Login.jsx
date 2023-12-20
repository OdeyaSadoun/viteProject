
import React, { useContext, useRef } from 'react'
import { useLogin } from '../hooks/useLogin'
import { AppContext } from '../context/context';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config';



export default function Login() {
  const { userId, setUserId } = useContext(AppContext);
  const { loginUser, setLoginUser } = useContext(AppContext);

  const { error, login } = useLogin()
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
    <div className='container mx-auto col-md-6'>
      <form className='form-control my-5 p-5' onSubmit={onSub}>
        <h2 className='text-center mb-5'>Hello:) please login</h2>
        <label>Email:</label>
        <input className='form-control' ref={mailRef} type="email" />
        <br />
        <label>Password:</label>
        <input className='form-control' ref={passRef} type="password" />
        <h3 className='text-danger'>{error}</h3>
        <div className='d-flex'>
        <button className='btn btn-outline-danger mt-2 me-3'>Log in</button>
        <button type='reset' className='btn btn-outline-dark mt-2'>Reset</button>
        </div>
        <div className='mt-4 text-center'>
        Are you not registered yet?  
        <a className='mx-2' href='/users/signup'>Register now</a>
        </div>
      </form>
    </div>
  )
}
