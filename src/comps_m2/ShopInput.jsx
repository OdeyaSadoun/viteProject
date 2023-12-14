import React , {useContext} from 'react'
import {useForm} from 'react-hook-form'
import { AppContext } from './context/context';
import uuid4 from 'uuid4';

const ShopInput = () => {
    const {register, handleSubmit, formState: {errors}, getValues} = useForm();

    const {ar, setAr} = useContext(AppContext);


    const onSub = (dataBody) => {
        dataBody.dateCreated = Date.now();
        dataBody.id = uuid4();
        setAr([...ar, dataBody]);
        document.querySelector("input").value = "";
        document.querySelector("#num_input").value = 0;
    }

    const nameRef = register("name", {required:true, minLength:2});
    const amountRef = register("amount", {required:true, min:1});

  return (
    <div className='container col-md-6 mx-auto'>
        <h2>Add Item</h2>
        <form onSubmit={handleSubmit(onSub)} className='form-control'>
            <label className=' my-3'>Product name:</label>
            <input className='form-control' {...nameRef} type='text'/>
            {errors.name && <p style={{color: "red"}}>* Enter valid product name</p>}

            <label className=' my-3'>Amount:</label>
            <input id="num_input" defaultValue={0} className='form-control' {...amountRef} type='number'/>
            {errors.amount && <p style={{color: "red"}}>* Enter amount, must be more than 1</p>}

            <button className='btn btn-success my-3'>Add</button>
            <button onClick={() => {
                setAr([]);
            }} type='button' className='btn btn-danger my-3'>Delete All</button>
        </form>
    </div>
  )
}

export default ShopInput