import React, { useContext } from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router';
import { AppContext } from '../context/context';


const EmpInput = () => {
    const nav = useNavigate();
    const inputRef = useRef();
    const inputRefSearch = useRef();
    const {gender, setGender} = useContext(AppContext);

    return (
        <div className='container d-flex justify-context-between'>
            <div className='left'>
            <input className='m-2' ref={inputRef} type="search" placeholder='put in nation' />
            <button onClick={() => {
              nav(`/employee/${inputRef.current.value}`)  
            }} className='btn btn-info'>search</button>
            </div>
            <div className='right'>
                <select ref={inputRefSearch} onChange={() => {
                    setGender(inputRefSearch.current.value)
                }}>
                    <option>choose gender</option>
                    <option value="female">female</option>
                    <option value="male">male</option>
                </select>
            </div>
        </div>
    )
}

export default EmpInput