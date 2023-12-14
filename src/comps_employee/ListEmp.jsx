import React, { useContext } from 'react'
import { AppContext } from '../context/context';

const ListEmp = () => {
    const { ar_emps, setAr_emps } = useContext(AppContext);
    let url = `https://randomuser.me/api/?results=10&seed=${searchQ}`;
    return (
        <div>

        </div>
    )
}

export default ListEmp