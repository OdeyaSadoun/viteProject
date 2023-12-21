import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'firebase/firestore';
import ResumeOutput from './ResumeOutput'; // Assuming this is the component to display the fetched data
import { useCollection } from '../hooks/useCollection';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';

const ResumeSingle = () => {
    const params = useParams();
    const [resumeData, setResumeData] = useState(null);
    const { docs: cvs } = useCollection("cvs");

    useEffect(() => {
        getFireData();
    }, [params.id])

    const getFireData = async () => {
        const cvs = collection(db, "cvs");

        const queryS = await getDocs(query(cvs, where('id', '==', (params.id)*1)));
        if (queryS.empty) {
            console.log("No such document!");
        } else {
            // docSnap.data() will be undefined in this case
            console.log("queryS", queryS);
            for(const doc of queryS.docs){
                setResumeData(doc.data());
            }
            
        }
    }
    
    return (
        <div>
            {resumeData ? (
                <ResumeOutput resumeObject={resumeData} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ResumeSingle;
