import React, { useState } from 'react'

const MovieItem = (props) => {
    const [info, setInfo] = useState(false)
    const item = props.item;
    let imgUrl = `./images/movies_images/${item.image}`;
    console.log(imgUrl);
    return (
        <div className='container mx-auto shadow border-info p-3 col-4 m-2 overflow-hidden'>
            <img src={imgUrl}/>
            <h3>{item.name}</h3>
            <p>Views: {item.views}</p>
            <p>Genere: {item.genere}</p>
            <button onClick={() => {
                setInfo(!info);
            }}>{info ? "show less" : "read more"}</button>
            {info && <p>{item.descrption}</p>}

        </div>
    )
}

export default MovieItem