import React from 'react'

const EmpItem = (props) => {
    let item = props.item;
    console.log(item);
  return (
    <div className='col-md-4 border shadow p-4'>
        <img src={item.picture.large}/>
        <h3>{item.name.first}</h3>
        <p>Country: {item.location.country}</p>
        <p>Phone: {item.phone}</p>
    </div>
  )
}

export default EmpItem