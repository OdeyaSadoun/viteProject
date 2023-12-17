import React from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addWork } from "../featurers/resumeSlice"

const CompanyItem = (props) => {
    const dispatch = useDispatch();
    const companyNameRef = useRef();
    const timeStartRef = useRef();
    const timeEndRef = useRef();


    return (
        <div>
            <label className='md-1'>Company name:</label>
            <input ref={companyNameRef} type='text' className='form-control' required />

            <label className='md-1'>Time frame:</label>
            <div className='d-flex'>
                <input ref={timeStartRef} type='date' className='form-control me-2' required />
                <input ref={timeEndRef} type='date' className='form-control ms-2' />
            </div>
           <button type='button' onClick={() => {
             {companyNameRef != undefined && timeStartRef != undefined && timeEndRef &&  props.setWorks_ar([...props.works_ar, {
                companyName: companyNameRef.current.value,
                timeStart: timeStartRef.current.value,
                timeEnd: timeEndRef.current.value,
                id: Date.now()
            }])}
           }} className='btn btn-outline-dark'>Add</button>
        </div>
    )
}

export default CompanyItem