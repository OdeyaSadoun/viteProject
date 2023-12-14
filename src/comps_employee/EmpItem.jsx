import React from 'react'

const EmpItem = (props) => {
    let item = props.item;
  return (
    <div className='col-md-3 border shadow p-2 m-1'>
        <img src={item.picture.large}/>
        <h3>{item.name.first}</h3>
        <p>Country: {item.location.country}</p>
        <p>Phone: {item.phone}</p>
    </div>
  )
}

export default EmpItem