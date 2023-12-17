import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { add1, reset, addCustom, reduceCustom } from "../featurers/counterSlice"

const Counter = () => {
    const dispach = useDispatch();
    const { counter, user } = useSelector(myStore => myStore.counterSlice);

    return (
        <div className='container mx-auto text-center form-control m-3 shadow col-md-6'>
            <h2 className='display-6'>Counter: {counter}</h2>
            <h3 className='display-6'>User: {user}</h3>

            <button className='btn btn-success m-2' onClick={() => {
                dispach(add1());
            }}>add 1</button>
            <button className='btn btn-danger m-2' onClick={() => {
                dispach(reset());
            }}>reset</button>

            <button className='btn btn-info m-2' onClick={() => {
                dispach(addCustom({val:5}));
            }}>add 5</button>

<button className='btn btn-dark m-2' onClick={() => {
                dispach(reduceCustom({val:6}));
            }}>reduce 6</button>
        </div>
    )
}

export default Counter