import React, { useContext } from 'react'
import { AppContext } from '../context/context'
import { useCollection } from '../hooks/useCollection';
import CvItem from './CvItem';

const ListOfResumes = () => {
    const { userId } = useContext(AppContext);
    const { docs: cvs } = useCollection("cvs")

    return (
        <div>
                <h2 className='text-center my-4'>Your CVs:</h2>
            <div className='container mx-auto d-flex flex-wrap justify-content-around'>
                {(cvs.filter(item => item.userid == userId)).map(item => {
                    return (
                        <div className='border shadow p-2 col-md-4'>
                            <CvItem key={item.id} item={item} />
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default ListOfResumes