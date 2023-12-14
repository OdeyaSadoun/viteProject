import React, { useContext } from 'react'
import { AppContext } from '../context/context'
import EmpItem from './EmpItem';

const EmpList = () => {
    const {ar_emps, setAr_emps, gender, setGender} = useContext(AppContext);
  return (
    <div className='container d-flex flex-wrap justify-content-around'>
        {ar_emps.map(item => {
            return <EmpItem key={item.email} item={item} />
        })}
    </div>
  )
}

export default EmpList