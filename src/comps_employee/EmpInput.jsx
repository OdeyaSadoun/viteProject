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
        <div className='container d-flex justify-content-between p-3 m-4 mx-auto'>
            <div>
            <input ref={inputRef} type="search" placeholder='put in nation' />
            <button  onClick={() => {
              nav(`/employee/${inputRef.current.value}`)  
            }} className='btn btn-info mx-1'>search</button>
            </div>
            <div >
                <select className='form-control' ref={inputRefSearch} onChange={() => {
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