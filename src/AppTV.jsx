import React, { useEffect, useState } from 'react'
import TvItem from './TvItem'
import axios from 'axios';

const AppTV = () => {

    const [ar, setAr] = useState([]);

    useEffect(() => {
        doApi();
    },[])

    const doApi = async() => {
        let url = "http://fs1.co.il/bus/tv.php";
        try{
            let resp = await axios.get(url);
            console.log(resp.data);
            setAr(resp.data);
        }
        catch(error){
            console.log(error);
            alert("There problem, come back later")
        }
    }

  return (
    <div className='container'>
        <h1>list of VOD</h1>
        <div className='row g-3'>
            {ar.map(item => {
                return(
                    <TvItem key={item.name} item={item}/>
                )
            })}

        </div>
        
    </div>
  )
}

export default AppTV