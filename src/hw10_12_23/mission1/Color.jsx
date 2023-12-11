import React from 'react'

const Color = (props) => {
  return (
    <div>
        <h2>
            select a color
        </h2>
        <button onClick={() => {props.setColor("red")}}>red</button>
        <button onClick={() => {props.setColor("green")}}>green</button>
        <button onClick={() => {props.setColor("blue")}}>blue</button>

    </div>
  )
}

export default Color