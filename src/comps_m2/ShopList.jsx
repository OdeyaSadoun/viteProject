import React, { useContext, useEffect, useState } from 'react'
import ShopItem from './ShopItem';
import { AppContext } from './context/context';

const ShopList = () => {
    const { ar, setAr } = useContext(AppContext);

    return (
        <div className='container mx-auto col-md-6 text-center my-4'>
            <h2>Shop List:</h2>
            {ar.map(item => {
                return <ShopItem item={item} key={item.id} />
            })}
        </div>
    )
}

export default ShopList