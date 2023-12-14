import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router';


const EmpInput = () => {
    const nav = useNavigate();
    const inputRef = useRef();

    return (
        <div >
            <input className='m-2' ref={inputRef} type="search" placeholder='put in nation' />
            <button onClick={() => {
              nav(`/employee/${inputRef.current.value}`)  
            }} className='btn btn-info'>search</button>
        </div>
    )
}

export default EmpInput