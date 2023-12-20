import React from 'react'

const CvItem = (props) => {
    let item = props.item;
  return (
    <div className='m-2 p-2'>
        <h4 className='fw-bold'>{item.name}</h4>
        <h4>{item.title}</h4>
        <p className='lead'>The most recent experience: {item.works[0].company_name}</p>
    </div>
  )
}

export default CvItem