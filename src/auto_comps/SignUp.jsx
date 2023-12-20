import React, { useContext, useRef } from 'react'
import { useSignup } from '../hooks/useSingUp ';
import { auth, db } from '../firebase/config'
import { collection, addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore'
import { AppContext } from '../context/context';
import{onAuthStateChanged} from 'firebase/auth'

export default function Signup() {

  const {userId, setUserId} = useContext(AppContext);

  const {error, signup} = useSignup()
  const mailRef = useRef();
  const passRef = useRef();


  const onSub = (e) => {
    e.preventDefault();
    signup(mailRef.current.value, passRef.current.value);
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.uid);
        setUserId(user.uid);
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
        <button>Sing up</button>
      </form>
    </div>
  )
}
