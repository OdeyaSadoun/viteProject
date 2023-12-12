import React, { useEffect, useState } from 'react'
import BitcoinItem from './BitcoinItem'
import axios from 'axios';

const AppM2 = () => {
    const [coins_ar, setCoins_ar] = useState([]);


    useEffect(() => {
        doApi();
    }, []);

    const doApi = async () => {
        let url = "http://fs1.co.il/bus/bitcoin.php";
        let resp = await axios.get(url);
        setCoins_ar(resp.data);
    }

    return (
        <div>
            <h2>Welcome!</h2>
            <div className='container d-flex flex-wrap'>
                {coins_ar.map(item => {
                    return <BitcoinItem item={item} key={item.id}/>
                })}
            </div>
        </div>
    )
}

export default AppM2