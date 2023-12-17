import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addWork } from "../featurers/resumeSlice"

const CompanyItem = (props) => {
    const dispach = useDispatch();
    const { works_ar } = useSelector(myStore => myStore.resumeSlice);

    const companyNameRef = useRef();
    const timeStartRef = useRef();
    const timeEndRef = useRef();

    const handleBlur = () => {
        const companyName = companyNameRef.current.value;
        const timeStart = timeStartRef.current.value;
        const timeEnd = timeEndRef.current.value;

        if (companyName && timeStart && timeEnd) {
            const newData = {
                companyName,
                timeStart,
                timeEnd: timeEnd || '',
                id: Date.now()
            };

            dispach(addWork({ work: newData }));
            console.log("ar", works_ar);
        }
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

        </div>
    )
}

export default CompanyItem