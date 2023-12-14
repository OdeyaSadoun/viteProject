import React, {useState} from 'react'
import ShopInput from './ShopInput'
import { AppContext } from './context/context'
import ShopList from './ShopList';

const ShopApp = () => {
    const [ar, setAr] = useState([]);

    return (
        <AppContext.Provider value={{
            ar, setAr
        }}>
            <ShopInput />
            <ShopList/>
        </AppContext.Provider>
    )
}

export default ShopApp