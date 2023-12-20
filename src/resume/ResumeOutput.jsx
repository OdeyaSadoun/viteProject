import React from 'react'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'


const ResumeOutput = (props) => {
    let user = props.resumeObject;

    const imageStyles = {
        objectFit: 'cover',
        width: '150px',
        height: '150px',
    };

    const downloadPDF = () => {
        const capture = document.querySelector('.output')
        html2canvas(capture).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'mm', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth()
            const componentHeight = doc.internal.pageSize.getHeight()
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
            doc.save(`${user.name}_cv.pdf`)
        })
    }


    return (
        <div>
            <div className='output container m-5 bg-info'>

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
                    <h4>Work experience:</h4>
                    {user.works.map(work => {
                        return <div key={work.id}>
                            <p><strong>{work.company_name}</strong></p>
                            <p>{work.role}</p>
                            <div className='d-flex'>
                                <p><strong className='me-2'> from: </strong> {work.time_start} </p>
                                {work.time_end != "" && <p><strong className='mx-2'> to: </strong>{work.time_end}</p>}
                            </div>
                        </div>
                    })}
                </div>

                <hr></hr>

                {/* educations */}
                <div className='my-3 '>
                    <h4>Education:</h4>
                    {user.educations.map(edu => {
                        return <div key={edu.id}>
                            <p><strong>{edu.academic_name}</strong></p>
                            <p>{edu.field_study}</p>
                            <p>{edu.grade}</p>
                            <div className='d-flex'>
                                <p><strong className='me-2'> from: </strong> {edu.time_start} </p>
                                {edu.time_end != "" && <p><strong className='mx-2'> to: </strong>{edu.time_end}</p>}
                            </div>
                        </div>
                    })}
                </div>


            </div>
            <button onClick={downloadPDF}>Download</button>
        </div>
    )
}

export default ResumeOutput