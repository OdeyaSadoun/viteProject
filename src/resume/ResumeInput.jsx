import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import CompanyItem from './CompanyItem';
import { useDispatch, useSelector } from "react-redux"
import { addWork } from "../featurers/resumeSlice"

const ResumeInput = () => {
    const [works_ar, setWorks_ar] = useState([]);
    const [renderedComponents, setRenderedComponents] = useState([]);

    const addComponent = () => {
        // Create a new array with the existing rendered components and add a new component
        const updatedComponents = [
            ...renderedComponents,
            <CompanyItem setWorks_ar={setWorks_ar} works_ar={works_ar} key={renderedComponents.length} />
            // Replace <YourComponent /> with the component you want to render
            // Use a unique key for each component in the array
        ];
        setRenderedComponents(updatedComponents);
    };

    useEffect(() => {
        console.log(works_ar);
    }, [works_ar])

    const nameRef = useRef();



    return (
        <div>
            <h2>Fill in your deatiles:</h2>
            <form className='container form-control'>

                <label className='my-2'>Full name:</label>
                <input ref={nameRef} type='text' className='form-control' required />

                <label className='my-2'>Work experience:</label>
                <CompanyItem setWorks_ar={setWorks_ar} works_ar={works_ar} />
                {/* {works_ar.push(<CompanyItem key={Date.now()} />)} */}

                <button type='button' className='btn btn-dark my-2' onClick={
                    addComponent}>Add experience</button>
                {renderedComponents.map((component, index) => (
                    <div key={index}>{component}</div>
                ))}

            </form>
        </div>

    )
}

export default ResumeInput