import React, { useEffect, useState } from 'react'
import VipItem from './VipItem'
import axios from "axios"


const VipList = () => {
    const [ar, setAr] = useState([]);
    useEffect(() => {
        doApi();
    }, []);

    const doApi = async() =>{
        let url = "https://expressrichpepole.onrender.com";
        try{
            let resp = await axios.get(url);
            console.log(resp.data);
            setAr(resp.data);
        }
        catch(err){
            console.log(err);
            alert("There is a problem, come back later")
        }
    }

  return (
    <div className='container'>
        <h2>List of vip</h2>
        <div className='row g-3'>
            {ar.map(item => {
                return(
                    <VipItem key={item.name} item={item}/>
                )
            })}
            {ar.length < 1 && <h2>loading....</h2>}

        </div>
        
    </div>
  )
}

export default VipList