

import React from "react";
import {NavLink} from "react-router-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Navbar = () =>{
return(
  <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">Employee Management System</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/Login">Login</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/Dashboard">Dashboard</NavLink>
        </li>
        {/* <li class="nav-item">
          <NavLink className="nav-link" to="/UserList">UserList</NavLink>
        </li> */}
        <li class="nav-item">
          <NavLink className="nav-link" to="/Userlistsearch">Userlistsearch</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/AddUser">Add User</NavLink>
        </li>
        {/* <li class="nav-item">
          <Navlink class="nav-link" to="/">Pricing</Navlink>
        </li> */}
     
      </ul>
    </div>
  </div>
</nav>
  
)
}

export default Navbar;