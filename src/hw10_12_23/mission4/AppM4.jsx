import React, { useEffect, useState } from 'react'
import MovieItem from './MovieItem'
import axios from 'axios';

const AppM4 = () => {
    const [movies_ar, setMovies_ar] = useState([]);


    useEffect(() => {
        doApi();
    }, []);

    const doApi = async () => {
        let url = "http://fs1.co.il/bus/tv.php";
        let resp = await axios.get(url);
        setMovies_ar(resp.data);
    }

    return (
        <div>
            <h2>Welcome!</h2>
            <div className='container d-flex flex-wrap'>
                {movies_ar.map(item => {
                    return <MovieItem item={item} key={item.name}/>
                })}
            </div>
        </div>
    )
}

export default AppM4