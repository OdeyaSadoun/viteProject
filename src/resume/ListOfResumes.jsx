import React, { useContext } from 'react'
import { AppContext } from '../context/context'
import { useCollection } from '../hooks/useCollection';

const ListOfResumes = () => {
    const {userId} = useContext(AppContext);
    const { docs: cvs } = useCollection("cvs")

    return (
        <div>
            ListOfResumes
            <div>
                {(cvs.filter(item => item.userid == userId)).map(item => {
                    return (
                        <li key={item.id}>{item.name}</li>
                    )
                })}

            </div>
        </div>
    )
}

export default ListOfResumes