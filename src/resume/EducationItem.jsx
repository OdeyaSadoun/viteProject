import React, { useState } from 'react'
import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addEducation, deleteEducation } from "../featurers/resumeSlice"

const EducationItem = () => {
    const dispatch = useDispatch();
    const [id, setId] = useState(Date.now());
    const [obj, setObj] = useState({});
    const [idList, setIdList] = useState([]);

    const handleChangeInputs = (e) => {
        if (e) {
            const { name, value } = e.target;
            obj[name] = value;
            setObj({ ...obj });
        }

        if (obj["academic_name"] && obj["time_start"] && obj["time_end"] && obj["field_study"] && obj["grade"]) {
            obj["id"] = id;
            setObj({ ...obj });
            if (idList.indexOf(id) != -1) {
                dispatch(deleteEducation({ id, edu: obj }));
                dispatch(addEducation({ id, edu: obj }));
            }
            else {
                setIdList([...idList, id]);
                dispatch(addEducation({ id, edu: obj }));
            }
        }
    };

    return (
        <div className='my-3'>
            <label className='md-1'>Academic institution:</label>
            <input name="academic_name" onChange={handleChangeInputs} type='text' className='form-control' required />

            <label className='md-1'>Field of study:</label>
            <input name="field_study" onChange={handleChangeInputs} type='text' className='form-control' required />

            <label className='md-1'>Grade:</label>
            <input name="grade" onChange={handleChangeInputs} type='number' className='form-control' required />

            <label className='md-1'>Time frame:</label>
            <div className='d-flex'>
                <input name="time_start" onChange={handleChangeInputs} type='date' className='form-control me-2' required />
                <input name="time_end" onChange={handleChangeInputs} type='date' className='form-control ms-2' />
            </div>
        </div>
    )
}

export default EducationItem