import React from 'react'

const ResumeOutput = (props) => {
    let user = props.resumeObject;

    const imageStyles = {
        objectFit: 'cover',
        width: '150px',
        height: '150px',
    };

    return (
        <div className='container mx-auto col-md-6'>
            <div className='header_cv d-flex'>
                <div>
                    <img style={imageStyles} className='rounded-circle' src={user.image} alt={user.name} />
                </div>
                <div>
                    <h2 className='display-6 mx-3 fw-bold'>{user.name}</h2>
                    <h4 className='display-6 mx-3'>{user.title}</h4>

                </div>
            </div>

            {/* work_exp */}
            <div className='my-3 '>
                <h2>work experience:</h2>
                {user.works.map(work => {
                    return <div key={work.id}>
                        <p><strong>Company name: </strong>{work.company_name}</p>
                        <p><strong>Role: </strong>{work.role}</p>
                        <p><strong>From: </strong>{work.time_start}</p>
                    </div>
                })}
            </div>

        </div>
    )
}

export default ResumeOutput