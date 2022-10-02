import React, { useState } from 'react';
// import './App.css';
// import UserList from './UserList';
import { employeedata } from '../data/data';
import Swal from "sweetalert2";

// import Header from './components/Header';
// import Add from './components/Add';

function Userlistsearch() {
  const[employees, setEmployees]=useState(employeedata);
  const [sorted, setSorted]=useState({sorted:"id", reversed: false});

    const sortById=()=>{
        setSorted({sorted:"id", reversed: !sorted.reversed});
        const usersCopy=[...employees];
        usersCopy.sort((userA,userB)=>{
            if(sorted.reversed) {
                return userA.id-userB.id;
            }
            return userB.id-userA.id
        })
        setEmployees(usersCopy);
    }

    const sortByName=()=>{
        setSorted({sorted:"name", reversed: !sorted.reversed});
        const usersCopy=[...employees];
        usersCopy.sort((userA,userB)=>{
            const nameA=userA.name;
            const nameB=userB.name;
            if(sorted.reversed) {
                return nameB.localeCompare(nameA);
            }
            return nameA.localeCompare(nameB)
        })
        setEmployees(usersCopy);
    }

    const sortByUsername=()=>{
        setSorted({sorted:"username", reversed: !sorted.reversed});
        const usersCopy=[...employees];
        usersCopy.sort((userA,userB)=>{
            const nameA=userA.username;
            const nameB=userB.username;
            if(sorted.reversed) {
                return nameB.localeCompare(nameA);
            }
            return nameA.localeCompare(nameB)
        })
        setEmployees(usersCopy);
    }

    const sortByEmail=()=>{
        setSorted({sorted:"email", reversed: !sorted.reversed});
        const usersCopy=[...employees];
        usersCopy.sort((userA,userB)=>{
            const nameA=userA.email;
            const nameB=userB.email;
            if(sorted.reversed) {
                return nameB.localeCompare(nameA);
            }
            return nameA.localeCompare(nameB)
        })
        setEmployees(usersCopy);
    }

    const sortByPhone=()=>{
        setSorted({sorted:"phone", reversed: !sorted.reversed});
        const usersCopy=[...employees];
        usersCopy.sort((userA,userB)=>{
            if(sorted.reversed) {
                return userA.phone-userB.phone;
            }
            return userB.phone-userA.phone
        })
        setEmployees(usersCopy);
    }
  const[searchPhrase,setSearchPhrase]=useState("");
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
      {/* <Header />
      <Add /> */}
      <div className='Header'>Employee List</div>
      <div className='search-container'>
        <input 
        type="text"
        placeholder='Search'
        value={searchPhrase} onInput={(event)=>search(event)}/>
      </div>
      <button className='add' style={{backgroundColor:"green"}}>Add user</button>

      {/* <UserList/> */}
      
    <div className='container-table'>

<table className='striped-table'>
<thead>
<tr>
<th onClick={sortById}>ID</th>
<th onClick={sortByName}>Name</th>
<th onClick={sortByUsername}>Username</th>
<th onClick={sortByEmail}>Email</th>
<th onClick={sortByPhone}>Phone</th>
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

// import React, { useState } from 'react';

// import { employeedata } from '../data/data';
// import Header from './Header';
// import List from './List';
// import Add from './Add';
// import Edit from './Edit';


// function UserList(){
//     const[employees, setEmployees]=useState(employeedata);
//     const[isAdding,setIsAdding]=useState(false);
//     const[isEditing,setIsEditing]=useState(false);

//     const handleEdit=()=>{
//         //
//     }

//     const handleDelete=()=>{
//         //
//     }


//   return (
//     <div className='container'>
//         {!isAdding && !isEditing && (
//             <>
//               <Header 
//               setIsAdding={setIsAdding}
//               />
//               <List
//               employees={employees}
//               handleEdit={handleEdit}
//               handleDelete={handleDelete}
//               />
//             </>
//         ) 
//         }
//         {isAdding &&(
//             <Add
//             employees={employees}
//             setEmployees={setEmployees}
//             setIsAdding={setIsAdding}
//             />
//         )

//         }

//         {isEditing &&(
//             <Edit
//             employees={employees}
//             setEmployees={setEmployees}
//             setIsEditing={setIsEditing}
//             />
//         )

//         }
//     </div>
//   )
// }
  

// export default UserList;

