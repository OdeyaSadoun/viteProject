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
            <div className='header_cv d-flex align-items-center'>
                <div>
                    <img style={imageStyles} className='rounded-circle' src={user.image} alt={user.name} />
                </div>
                <div>
                    <h2 className='display-6 mx-3 fw-bold'>{user.name}</h2>
                    <h4 className='lead mx-3'>{user.title}</h4>

                </div>
            </div>

            {/* work_exp */}
            <div className='my-3 '>
                <h4>work experience:</h4>
                {user.works.map(work => {
                    return <div key={work.id}>
                        <p><strong>{work.company_name}</strong></p>
                        <p>{work.role}</p>
                        <div className='d-flex'>
                            <p><strong  className='me-3'> from: </strong> {work.time_start} </p>
                            {work.time_end != "" && <p><strong  className='mx-3'> to: </strong>{work.time_end}</p>}
                        </div>
                    </div>
                })}
            </div>

        </div>
    )
}

export default ResumeOutput