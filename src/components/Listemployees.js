import React from 'react'

const Listemployees = (props) => {
  return (
    <>
    <tr>
        <td>{props.id}</td>
        <td>{props.fname}</td>
        <td>{props.sname}</td>
        <td>{props.email}</td>
        <td>{props.phone}</td>
        <td>{props.city}</td>
        <td>{props.role}</td>
    </tr>
    </>
  )
}

export default Listemployees