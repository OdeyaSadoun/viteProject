import React, { useState, useRef, useEffect } from 'react'

const Color = () => {
    const [color, setColor] = useState("red");
    const [counter, setCounter] = useState(0);

    const inputRef = useRef();

    useEffect(()=>{
        setCounter(counter + 1);
    },[color])

    return (
        <div className='container'>
            <h1 style={{ color:  color  }}>Choose your color:</h1>
            <h2>counter: {counter}</h2>
            <select ref={inputRef} onChange={()=>{
                setColor(inputRef.current.value);
            }}>
                <option value='red'>red</option>
                <option value='green'>green</option>
                <option value='blue'>blue</option>
                <option value='gold'>gold</option>
            </select>
        </div>
    )
}

export default Color