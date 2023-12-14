import React from 'react'

const EmpItem = (props) => {
    let item = props.item;
    console.log(item);
  return (
    <div>
        <p>{item.name.first}</p>
        <img src={item.picture.large}/>
    </div>
  )
}

export default EmpItem