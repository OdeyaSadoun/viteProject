import React, { useState } from 'react'
import { db } from '../firebase/config'
import { collection, addDoc, doc, deleteDoc, updateDoc, getDoc } from 'firebase/firestore'
import ResumeOutput from './ResumeOutput'


const ResumeSingle = (props) => {
    const [data, setData] = useState({})
    const onClick = async (id) => {
        const ref = doc(db, "cvs", props.id);
        let data = await getDoc(ref);
        setData(data);
    }
  return (
    <ResumeOutput resumeObject={data}/>
  )
}

export default ResumeSingle