import React, { useState } from 'react'
import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addEducation } from "../featurers/resumeSlice"

const EducationItem = () => {
    const dispatch = useDispatch();
    const { educations_ar } = useSelector(myStore => myStore.resumeSlice);
    const [id, setId] = useState(Date.now());

    const academicNameRef = useRef();
    const timeStartRef = useRef();
    const timeEndRef = useRef();
    const fieldStudyRef = useRef();
    const gradeRef = useRef();



    const handleBlur = () => {
        const academicName = academicNameRef.current.value;
        const timeStart = timeStartRef.current.value;
        const timeEnd = timeEndRef.current.value;
        const fieldStudy = fieldStudyRef.current.value;
        const grade = gradeRef.current.value;

        const isDuplicate = educations_ar.some(edu => (
            edu.academicName === academicName &&
            edu.timeStart === timeStart &&
            edu.timeEnd === timeEnd &&
            edu.fieldStudy === fieldStudy &&
            edu.grade === grade 
          ));

        if (!isDuplicate && academicName && timeStart && timeEnd && fieldStudy && grade) {
            const newData = {
                academicName,
                timeStart,
                timeEnd: timeEnd || '',
                fieldStudy,
                grade,
                id
            };

            dispatch(addEducation({ edu: newData }));
        }
    };

    return (
        <div className='my-3'>
            <label className='md-1'>Academic institution:</label>
            <input onBlur={handleBlur} ref={academicNameRef} type='text' className='form-control' required />
           
            <label className='md-1'>Field of study:</label>
            <input onBlur={handleBlur} ref={fieldStudyRef} type='text' className='form-control' required />

            <label className='md-1'>Grade:</label>
            <input onBlur={handleBlur} ref={gradeRef} type='number' className='form-control' required />

            <label className='md-1'>Time frame:</label>
            <div className='d-flex'>
                <input onBlur={handleBlur} ref={timeStartRef} type='date' className='form-control me-2' required />
                <input onBlur={handleBlur} ref={timeEndRef} type='date' className='form-control ms-2' />
            </div>
        </div>
    )
}

export default EducationItem