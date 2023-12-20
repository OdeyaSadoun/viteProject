import React, { useContext, useRef } from 'react'
import { useSignup } from '../hooks/useSingUp ';
import { auth, db } from '../firebase/config'
import { collection, addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore'
import { AppContext } from '../context/context';
import { onAuthStateChanged } from 'firebase/auth'

export default function Signup() {

  const { userId, setUserId } = useContext(AppContext);
  const { loginUser, setLoginUser } = useContext(AppContext);

  const { error, signup } = useSignup()
  const mailRef = useRef();
  const passRef = useRef();


  const onSub = (e) => {
    e.preventDefault();
    signup(mailRef.current.value, passRef.current.value);

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
        <h2 className='text-center mb-5'>Hi:) please sign up</h2>
        <label>Email:</label>
        <input className='form-control' ref={mailRef} type="email" required />
        <br />
        <label>Password:</label>
        <input className='form-control' ref={passRef} type="password" required />
        <h3 className='text-danger'>{error}</h3>
        <div className='d-flex'>
          <button className='btn btn-outline-danger mt-2 me-3'>Sign up</button>
          <button type='reset' className='btn btn-outline-dark mt-2'>Reset</button>
        </div>
        <div className='mt-4 text-center'>
          Already have an account?
          <a className='mx-2' href='/users/login'>Login now</a>
        </div>
      </form>
    </div>
  )
}
