import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/context'
import axios from 'axios';
import EmpInput from './EmpInput';
import EmpList from './EmpList';
import { useParams } from 'react-router';

const AppEmp = () => {
    const [ar_emps, setAr_emps] = useState([]);
    const [nat, setNat] = useState("");
    const [gender, setGender] = useState("");
    const num_results = 50;

    const params = useParams();

    useEffect(() => {
        doApi();
    }, [params["nat"], gender])

    const doApi = async() => {
        let searchQ = params["nat"] || "BR";
        let url = `https://randomuser.me/api/?results=${num_results}&nat=${searchQ}&gender=${gender}`;
        let resp = await axios.get(url);
        setAr_emps(resp.data.results);
    }


    return (
        <AppContext.Provider value={{ ar_emps, setAr_emps, nat, setNat, gender, setGender }}>
            <div className='container mx-auto'>
                <EmpInput />
                <EmpList />
            </div>
        </AppContext.Provider>
    )
}

export default AppEmp