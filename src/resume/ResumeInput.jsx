import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import CompanyItem from './CompanyItem';
import { useDispatch, useSelector } from "react-redux"
import { addWork } from "../featurers/resumeSlice"

const ResumeInput = () => {

    const [workComponents, setWorkComponents] = useState([<CompanyItem key={0} />]);

    const addComponent = () => {
        const updatedComponents = [
            ...workComponents,
            <CompanyItem key={workComponents.length} />
        ];
        setWorkComponents(updatedComponents);
    };

    const nameRef = useRef();

    return (
        <div>
            <h2>Fill in your deatiles:</h2>
            <form className='container form-control'>

                <label className='my-2'>Full name:</label>
                <input ref={nameRef} type='text' className='form-control' required />

                <label className='my-2'>Work experience:</label>
                {workComponents.map((component, index) => (
                    <div key={index}>{component}</div>
                ))}
                <button type='button' className='btn btn-dark my-2' onClick={
                    addComponent}>Add experience</button>
            </form>
        </div>

    )
}

export default ResumeInput