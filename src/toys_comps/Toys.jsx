import React from 'react'
import { db } from '../firebase/config'
import { collection, getDocs } from 'firebase/firestore'

const Toys = () => {
    const getFireData = async () => {
        const ref = collection(db, 'toys');
        const snapshot = await getDocs(ref)
        let fire_ar = [];
        snapshot.docs.forEach(item => {
            fire_ar.push({ id: item.id, ...item.data() })
            // console.log(item.id, item.data());
        })
        //setAr(fire_ar);
        console.log(fire_ar);
    }

    return (
        <div>Toys</div>
    )
}

export default Toys