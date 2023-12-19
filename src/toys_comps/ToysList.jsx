import React, { useEffect } from 'react'
import { useCollection } from '../hooks/useCollection'
import { db } from '../firebase/config'
import { collection, addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore'

export default function FireLiveToys() {
    const { docs: toys } = useCollection("toys")

    const addNewDoc = async () => {
        const ref = collection(db, 'toys')
        await addDoc(ref, {
            img_url: "eagle.jpg",
            info: "new eagle toy",
            price: 10,
            title: "small eagle toy"
        })
    }
    const onDelClick = async (id) => {
        const ref = doc(db, "toys", id);
        await deleteDoc(ref);
    }

    const onEditDoc = async (id, updateTitle) => {
        const ref = doc(db, "toys", id)
        await updateDoc(ref, {
            title: updateTitle
        });
    }


    return (
        <div className='container'>
            <ul>
                {toys.map(item => {
                    return (
                        <li key={item.id}>{item.title}</li>
                    )
                })}

            </ul>
            <button onClick={addNewDoc}>Add</button>
            <button onClick={() => {
                onDelClick("uiJl01hqHaEuofsHPqU1");
            }}>Delete car</button>
            <button onClick={() => {
                onEditDoc("6fCdLpLgvNkv9rySCnIh", "trick");
            }}>Update truck</button>

        </div>
    )
}
