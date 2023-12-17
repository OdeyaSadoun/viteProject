import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addWork, updateEndTimeWork } from "../featurers/resumeSlice"

const CompanyItem = () => {
    const dispatch = useDispatch();
    const { works_ar } = useSelector(myStore => myStore.resumeSlice);
    const [id, setId] = useState(Date.now());

    const companyNameRef = useRef();
    const timeStartRef = useRef();
    const timeEndRef = useRef();
    const checkboxRef = useRef();

    const handleBlur = () => {
        const companyName = companyNameRef.current.value;
        const timeStart = timeStartRef.current.value;
        const timeEnd = timeEndRef.current.value;

        if (companyName && timeStart && timeEnd) {
            const newData = {
                companyName,
                timeStart,
                timeEnd: timeEnd || '',
                id: id
            };

            dispatch(addWork({ work: newData }));
            console.log(works_ar);
        }
    };

    const handleCheckboxChange = () => {
        const isChecked = checkboxRef.current.checked;
        console.log(isChecked);
        const timeEnd = isChecked ? "yyy" : timeEndRef.current.value;
    
        console.log("timeEnd",timeEnd);
    
        dispatch(updateEndTimeWork({ id, end: timeEnd }));

        console.log(works_ar);
      };

    return (
        <div className='my-3'>
            <label className='md-1'>Company name:</label>
            <input onBlur={handleBlur} ref={companyNameRef} type='text' className='form-control' required />

            <label className='md-1'>Time frame:</label>
            <div className='d-flex'>
                <input onBlur={handleBlur} ref={timeStartRef} type='date' className='form-control me-2' required />
                <input onBlur={handleBlur} ref={timeEndRef} type='date' className='form-control ms-2' />
            </div>
            <input ref={checkboxRef} onChange={handleCheckboxChange} className="form-check-input my-1 me-1" type='checkbox'/> 
            <label className="form-check-label">I'm currently working there.</label>

        </div>
    )
}

export default CompanyItem