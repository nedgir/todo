import React from 'react'

const Tasks = (props) => {
  return (
    <>
    <li className='list-group-item'>{props.task}</li>
    </>
  )
}

export default Tasks