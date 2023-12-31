import React, { useState } from 'react'
import ResumeSingle from './ResumeSingle';
import ResumeOutput from './ResumeOutput';
import { useNavigate } from 'react-router-dom';

const CvItem = (props) => {
    let item = props.item;
    const nav = useNavigate();
    const [onClickShow, setOnClickShow] = useState(false)
    return (
        <div onClick={() => {
            // setOnClickShow(true);
            nav(`../resume/${item.id}`);
            
        }}
            className='m-2 p-2'>
            <h4 className='fw-bold'>{item.name}</h4>
            <h4>{item.title}</h4>
            {/* <p className='lead'>The most recent experience: {item.works[0].company_name}</p> */}
            {/* {onClickShow && <ResumeOutput key={item.id} resumeObject={item}/>} */}
        </div>
    )
}

export default CvItem