import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/context'
import axios from 'axios';
import EmpInput from './EmpInput';
import EmpList from './EmpList';

const AppEmp = () => {
    const [ar_emps, setAr_emps] = useState([]);
    const num_results = 50;

    useEffect(() => {
        doApi();
    }, [])

    const doApi = async() => {
        let url = `https://randomuser.me/api/?results=${num_results}`;
        let resp = await axios.get(url);
        console.log(resp);
        setAr_emps(resp.data.results);
    }


    return (
        <AppContext.Provider value={{ ar_emps, setAr_emps }}>
            <div className='container'>
                <EmpInput />
                <EmpList />
            </div>
        </AppContext.Provider>
    )
}

export default AppEmp