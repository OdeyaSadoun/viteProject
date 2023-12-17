import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, resetTodos } from '../featurers/todosSlice'

const TodoInput = () => {
    const dispach = useDispatch();
    const nameRef = useRef();
    const timeRef = useRef();

    const addNewTodo = () => {
        let todoBody = {
            name: nameRef.current.value,
            time: timeRef.current.value,
            id: Date.now()
        }
        dispach(addTodo({ todo: todoBody }));
        document.querySelector("input").value = "";
    }

    const reset = () => {
        dispach(resetTodos());
    }
    return (
        <div className='container col-md-6'>
            <h2>Add new task</h2>
            <label>Name:</label>
            <input ref={nameRef} type="text" className='form-control' />
            <label>Time:</label>
            <input ref={timeRef} type="time" className='form-control' defaultValue="09:00" />
            <button onClick={addNewTodo} className='btn btn-info my-2'>Add</button>
            <button type='button' onClick={reset} className='btn btn-info m-2'>Reset</button>
        </div>
    )
}

export default TodoInput