import React,  {useContext} from 'react'
import { AppContext } from './context/context';

const ShopItem = (props) => {
    const { ar, setAr } = useContext(AppContext);
    let item = props.item;

    return (
        <div className='d-flex'>
            <button onClick={() => {
                setAr( ar.filter(i => i.id != item.id));
            }} className='btn btn-danger m-2'>X</button>
            <p className='m-2 lead'><strong>Product name:</strong> {item.name}</p>
            <p className='m-2 lead'><strong>Amount:</strong> {item.amount}</p>
        </div>
    )
}

export default ShopItem