import React from 'react';
// import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './pages/HomePage.';
// import UserList from './pages/UserList';
// import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Dashboard from './pages/Dashboard';
// import UserList from './pages/UserList';
import Userlistsearch from './pages/userlistsearch';
import Display from './Display';



function App(){
  return(
    <Router>
      <div className='App container'>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/Login" element={<LoginPage/>}></Route>
          <Route path="/Dashboard" element={<Dashboard/>}></Route>
          {/* <Route path="/UserList" element={<UserList/>}></Route> */}
          <Route path="/Userlistsearch" element={<Userlistsearch/>}></Route>
          <Route path="/AddUser" element={<Display/>}></Route>

          {/* <Route exact path="/UserList" component={UserList}></Route>
          <Route exact path="/Dashboard" component={Dashboard}></Route> */}
        </Routes>

    </div>
    </Router>
  )
}


export default App;

// import React from 'react';
// import './App.css';
// import UserList from './components/UserList';
// // import Header from './components/Header';
// import Add from './components/Add';

// function App() {
//   return (
//     <div className="App">
//       {/* <Header />
//       <Add /> */}
//       <div className='Header'>Employee List</div>
//       <div className='AddUser'></div>

//       <UserList/>
    
//     </div>
//   );
// }

// export default App;

