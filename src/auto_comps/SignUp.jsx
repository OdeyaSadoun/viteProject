import React, { useRef } from 'react'
import { useSignup } from '../hooks/useSingUp ';


export default function Signup() {
  const {error, signup} = useSignup()
  const mailRef = useRef();
  const passRef = useRef();


  const onSub = (e) => {
    e.preventDefault();
    signup(mailRef.current.value, passRef.current.value)
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
        <button>Sing up</button>
      </form>
    </div>
  )
}
