import React, { useContext } from 'react'
import { AppContext } from '../context/context'
import EmpItem from './EmpItem';

const EmpList = () => {
    const {ar_emps, setAr_emps} = useContext(AppContext);
  return (
    <div>
        {ar_emps.map(item => {
            return <EmpItem key={item.id} item={item}/>
        })}
    </div>
  )
}

export default EmpList