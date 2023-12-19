import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addWork,deleteWork, updateEndTimeWork } from "../featurers/resumeSlice"

const CompanyItem = ({index}) => {
    const dispatch = useDispatch();
    const { works_ar } = useSelector(myStore => myStore.resumeSlice);
    const [id, setId] = useState(Date.now());
    const [obj, setObj] = useState({});
    const [isChecked, setIsChecked] = useState(false);
    const checkboxRef = useRef();
    const [idList, setIdList] = useState([]);


    const handleChangeInputs = (e) => {
        const { name, value } = e.target;
        obj[name] = value;
        setObj({ ...obj });

        if (obj["company_name"] && obj["time_start"] && (obj["time_end"] || isChecked) && obj["role"]) {
            obj["id"] = id;
            setObj({ ...obj });
            if(idList.indexOf(id) != -1){
                console.log("there is exist");
                dispatch(deleteWork({id, work: obj}))
                dispatch(addWork({ id, work: obj }));
            }
            else{
                setIdList([...idList, id]);
                console.log(idList);
                dispatch(addWork({ id, work: obj }));
            }
        }
    };

    useEffect(() => {
        // let workIndex = works_ar.filter(item => item.id == id)
        dispatch(updateEndTimeWork({ id, end: obj["time_end"] }));
    }, [isChecked]);


    const handleCheckboxChange = () => {
        setIsChecked(checkboxRef.current.checked);
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