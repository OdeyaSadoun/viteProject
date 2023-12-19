import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import CompanyItem from './CompanyItem';
import { useDispatch, useSelector } from "react-redux"
import EducationItem from './EducationItem';
import { useForm } from "react-hook-form"
import ResumeOutput from './ResumeOutput';

const ResumeInput = () => {
    const { works_ar, educations_ar } = useSelector(myStore => myStore.resumeSlice);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [workComponents, setWorkComponents] = useState([<CompanyItem index={0} />]);
    const [eduComponents, setEduComponents] = useState([<EducationItem index={0} />]);

    const [toggle, setToggle] = useState(false);
    const [resumeObject, setResumeObject] = useState({});

    const showResume = () => {
        setToggle(!toggle)
    }

    const addWorkComponent = () => {
        const updatedComponents = [
            ...workComponents,
            <CompanyItem index={workComponents.length} />
        ];
        setWorkComponents(updatedComponents);
    };

    const addEduComponent = () => {
        const updatedComponents = [
            ...eduComponents,
            <EducationItem index={eduComponents.length} />
        ];
        setEduComponents(updatedComponents);
    };


    const nameRef = register("name", { required: true, minLength: 2 });
    const imageRef = register("image", { required: true, minLength: 4 });

    const onSub = (dataBody) => {
        console.log(dataBody);
        dataBody.works = works_ar;
        dataBody.educations = educations_ar;
        showResume();
        setResumeObject(dataBody);
    }

    return (
        <div className='container'>
            <div className='container mx-auto col-md-6'>
            <h2>Fill in your deatiles:</h2>
            <form onSubmit={handleSubmit(onSub)} className=' form-control  '>

                <label className='my-2'>Full name:</label>
                <input {...nameRef} type='text' className='form-control' required />
                {errors.name && <div className='text-danger'>* Enter valid name: min 2 chars</div>}

                <label className='mt-4 fw-bold'>Work experience:</label>
                {workComponents.map((component, index) => (
                    <div key={index} index={index} >{component}</div>
                ))}
                <button type='button' className='btn btn-dark my-2' onClick={
                    addWorkComponent}>Add experience</button>
                <br />

                <label className='mt-4 fw-bold'>Education:</label>
                {eduComponents.map((component, index) => (
                    <div key={index} index={index}>{component}</div>
                ))}
                <button type='button' className='btn btn-dark my-2' onClick={
                    addEduComponent}>Add education</button>

                <br /> 

                <label className='my-2'>Image URL:</label>
                <input {...imageRef} type='text' className='form-control' required />
                {errors.image && <div className='text-danger'>* Enter valid name: min 4 chars</div>}

                <button className='btn btn-dark my-2' >Create resume</button>
               
            </form>
            </div>
            {toggle == true && <ResumeOutput resumeObject={resumeObject} />}

        </div >

    )
}

export default ResumeInput