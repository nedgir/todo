import React,{useRef} from 'react'

const Addemployee = (props) => {
    const fname = useRef('');
    const sname = useRef('');
    const email = useRef('');
    const phone = useRef('');
    const city = useRef('');
    const role = useRef('');
    function addEmployee(event){
event.preventDefault();
        let obj = {
            id:Math.random(),
            fname:fname.current.value,
            sname:sname.current.value,
            email:email.current.value,
            phone:phone.current.value,
            city:city.current.value,
            role:role.current.value
        }
props.newemp(obj);
fname.current.value='';
sname.current.value='';
email.current.value='';
phone.current.value='';
city.current.value='';
    }
  return (
      <>
      <form onSubmit={addEmployee}>
    <div className='form-group'>
        <label htmlFor="fname">First name</label>
        <input className='form-control' ref={fname} type="text" id="fname"/>
    </div>
    <div className='form-group'>
        <label htmlFor="sname">Second name</label>
        <input className='form-control' ref={sname} type="text" id="sname"/>
    </div>
    <div className='form-group'>
        <label htmlFor="email">Email</label>
        <input className='form-control' ref={email} type="text" id="email"/>
    </div>
    <div className='form-group'>
        <label  htmlFor="phone">Phone</label>
        <input className='form-control' ref={phone} type="text" id="phone"/>
    </div>
    <div className='form-group'>
        <label htmlFor="city">City</label>
        <input className='form-control' ref={city} type="text" id="city"/>
    </div>
    <div className='form-group'>
        <label htmlFor='role'>Role</label>
        <select ref={role}>
            <option></option>
            <option>Admin</option>
            <option>Hr</option>
            <option>Staff</option>
        </select>
    </div>
    <div className='form-group'><button type="submit">Submit</button></div>
    </form>
    </>
  )
}

export default Addemployee