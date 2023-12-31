import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addWork, deleteWork, updateEndTimeWork } from "../featurers/resumeSlice"

const CompanyItem = ({ index }) => {
    const dispatch = useDispatch();
    const [id, setId] = useState(Date.now());
    const [obj, setObj] = useState({});
    const [isChecked, setIsChecked] = useState(false);
    const checkboxRef = useRef();
    const [idList, setIdList] = useState([]);


    const handleChangeInputs = (e) => {
        if (e) {   
            const { name, value } = e.target;
            obj[name] = value;
            setObj({ ...obj });
        }

        console.log("check", isChecked);
        console.log(obj["time_end"] || isChecked);
        if (obj["company_name"] && obj["time_start"] && (obj["time_end"] || isChecked) && obj["role"]) {
            obj["id"] = id;
            obj["time_end"] = isChecked ? "" : obj["time_end"]
            setObj({ ...obj });
            if (idList.indexOf(id) != -1) {
                dispatch(deleteWork({ id, work: obj }));
                dispatch(addWork({ id, work: obj }));
            }
            else {
                setIdList([...idList, id]);
                dispatch(addWork({ id, work: obj }));
            }
        }
    };

    useEffect(() => {
        if (idList.indexOf(id) != -1) {
            dispatch(updateEndTimeWork({ id, isChecked, end: obj["time_end"] }));
        }
        handleChangeInputs();
    }, [isChecked]);


    const handleCheckboxChange = () => {
        console.log(checkboxRef.current.checked);
        setIsChecked(checkboxRef.current.checked)
    };




    return (
        <div className='my-3'>
            <label className='md-1'>Company name:</label>
            <input name="company_name" onChange={handleChangeInputs} type='text' className='form-control' required />

            <label className='md-1'>Role:</label>
            <input name="role" onChange={handleChangeInputs}
                type='text' className='form-control' required />

            <label className='md-1'>Time frame:</label>
            <div className='d-flex'>
                <input name="time_start" onChange={handleChangeInputs} type='date' className='form-control me-2' required />
                <input name="time_end" onChange={handleChangeInputs} type='date' className='form-control ms-2' />
            </div>
            <input ref={checkboxRef} onChange={handleCheckboxChange} className="form-check-input my-1 me-1" type='checkbox' />
            <label className="form-check-label">I'm currently working there.</label>

        </div>
    )
}

export default CompanyItem