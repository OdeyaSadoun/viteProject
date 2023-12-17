import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import CompanyItem from './CompanyItem';
import { useDispatch, useSelector } from "react-redux"
import { addWork } from "../featurers/resumeSlice"
import EducationItem from './EducationItem';
import {useForm} from "react-hook-form"

const ResumeInput = () => {
    const { works_ar, educations_ar } = useSelector(myStore => myStore.resumeSlice);

    const { handleSubmit } = useForm();

    const [workComponents, setWorkComponents] = useState([<CompanyItem key={0} />]);
    const [eduComponents, setEduComponents] = useState([<EducationItem key={0} />]);

    const addWorkComponent = () => {
        const updatedComponents = [
            ...workComponents,
            <CompanyItem key={workComponents.length} />
        ];
        setWorkComponents(updatedComponents);
    };

    const addEduComponent = () => {
        const updatedComponents = [
            ...eduComponents,
            <EducationItem key={eduComponents.length} />
        ];
        setEduComponents(updatedComponents);
    };


    const nameRef = useRef();
    const imageRef = useRef();

    const onSub = (dataBody) => {
        console.log(dataBody);
        dataBody.works = works_ar,
        dataBody.educations = educations_ar
    }

    return (
        <div className='container mx-auto col-md-6'>
            <h2>Fill in your deatiles:</h2>
            <form onSubmit={handleSubmit(onSub)} className=' form-control'>

                <label className='my-2'>Full name:</label>
                <input ref={nameRef} type='text' className='form-control' required />

                <label className='mt-4 fw-bold'>Work experience:</label>
                {workComponents.map((component, index) => (
                    <div key={index}>{component}</div>
                ))}
                <button type='button' className='btn btn-dark my-2' onClick={
                    addWorkComponent}>Add experience</button>
                <br />

                <label className='mt-4 fw-bold'>Education:</label>
                {eduComponents.map((component, index) => (
                    <div key={index}>{component}</div>
                ))}
                <button type='button' className='btn btn-dark my-2' onClick={
                    addEduComponent}>Add education</button>

                    <br/>
                    
                <label className='my-2'>Image URL:</label>
                <input ref={imageRef} type='text' className='form-control' required />

                <button  className='btn btn-dark my-2' >Create resume</button>

            </form>
        </div >

    )
}

export default ResumeInput