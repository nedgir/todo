import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Newtask from './components/Newtask';
import Tasks from './components/Tasks';
import Addemployee from './components/Addemployee';
import Listemployees from './components/Listemployees';

function App() {
  const [employee,setEmployee] = useState([]);
  function addEmployee(data){
setEmployee((prev)=>[...prev,data]);
  }
  return (
    <div className="App">
     <Addemployee newemp = {addEmployee}/>
     <table className='table table-striped table-bordered'>
       <thead><th>Id</th><th>First name</th><th>Second name</th><th>Email</th><th>Phone</th><th>City</th><th>Role</th></thead>
     {employee.map(item =><Listemployees key={item.id} id={item.id} fname={item.fname} sname={item.sname} email={item.email} phone={item.phone} city={item.city} role={item.role}/>)}
     </table>
    </div>
  );
}

export default App;
