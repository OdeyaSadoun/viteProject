import React from 'react'
import { useSelector } from 'react-redux';

const TodoList = () => {
    const { todos_ar } = useSelector(myStore => myStore.todosSlice);

  return (
    <div className='container col-md-6'>
     {
        todos_ar.map((item, index) => {
            return <div className='d-flex' key={item.id}>
                <p className='px-1'><strong>name:</strong> {item.name}</p>
                <p className='px-1'><strong>time:</strong> {item.time}</p>
            </div>
        })
     }   
    </div>
  )
}

export default TodoList