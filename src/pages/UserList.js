

import React, { useState } from 'react';
// import './App.css';
// import UserList from './UserList';
import { employeedata } from '../data/data';
import Swal from "sweetalert2";

// import Header from './components/Header';
// import Add from './components/Add';

function Userlistsearch() {
  const[employees, setEmployees]=useState(employeedata);
  const[searchPhrase,setSearchPhrase]=useState("");
  const[newEmployee,setNewEmployee]=useState({
    "name": "",
    "username": "",
    "email": "",
    "phone": "",

  });

  const handleChange = (event) => {
    setNewEmployee({ ...newEmployee, [event.target.name]: event.target.value })
  };

  const handleAdd=()=>{
    setNewEmployee({ ...newEmployee, ["id"]: employees.length })
    employees.push(newEmployee)
  }

  const search=(event)=>{
    if(event.target.value === ""){
      setEmployees(employeedata)
    }
    else{const matchedUsers=employeedata.filter((employees)=> {
       return employees.name.toLowerCase().includes(event.target.value.toLowerCase())
      
    })
    setEmployees(matchedUsers);
  }
    setSearchPhrase(event.target.value)
  }

  const handleDelete =(id)=>{
    Swal.fire({
        icon:'warning',
        title:"Are you sure?",
        text: "You won't be able to reverse this action!!",
        showCancelButton:true,
        confirmButtonText:"Yes, delete it!",
        cancelButtonText:"No, cancel!",
    }).then(result=> {if(result.isConfirmed){
        const [employee] = employees.filter(employee=>
            employee.id === id);

            Swal.fire({
                icon:'success',
                title:'Deleted!',
                text: `${employee.name} data has been deleted`,
                showConfirmButton:false,
                timer:1500,
            });

            setEmployees(employees.filter(employee => employee.id!==id))
          }
    })
}
  return (
    <div className="App">
      
      <div className='add-container'>
        <input type="text" name="name" value={newEmployee.name} onInput={event=>handleChange(event)} placeholder='Name'/>
        <input type="text" name="username" value={newEmployee.username} onInput={event=>handleChange(event)} placeholder='Username'/>
        <input type="text" name="email" value={newEmployee.email} onInput={event=>handleChange(event)} placeholder='Email'/>
        <input type="text" name="phone" value={newEmployee.phone} onInput={event=>handleChange(event)} placeholder='Phone'/>
        <button className='add' style={{backgroundColor:"green"}} onClick={()=>handleAdd()}>Add user</button>
      </div>
      <hr/>
      <div className='search-container'>
        <input type="text" placeholder='Search' value={searchPhrase} onInput={(event)=>search(event)}/>
      </div>
      <div className='Header'>Employee List</div>

      {/* <UserList/> */}
      
    <div className='container-table'>

<table className='striped-table'>
<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>Username</th>
<th>Email</th>
<th>Phone</th>
<th colSpan={2} className="text-center">Actions</th>
</tr>
</thead>

<tbody>
{employees.length>0 ? (
employees.map((employee,i)=>(
    <tr key={employee.id}>
        <td>{i+1}</td>
        <td>{employee.name}</td>
        <td>{employee.username}</td>
        <td>{employee.email}</td>
        <td>{employee.phone}</td>
        <td className='text-right'>
            <button className='button muted-button'>Edit</button>
        </td>
        <td className='text-left'>
            <button className='button muted-button' onClick={()=>handleDelete(employee.id)}>Delete</button>
        </td>
    </tr>
))
):(
<tr>
    <td colSpace={7}>No Employeess</td>
</tr>

)
}

</tbody>
</table>
{/* <Header/>
<List/> */}
</div>
    
    </div>
  );

}
export default Userlistsearch;