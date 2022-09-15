import React from 'react';
// import logo from './logo.svg';
import './App.css';

import AddProjects from './components/Projects/project';
import ListProjectComponent from './components/Projects/projectdetails';
import AddEmployees from './components/Employees/Employee';
import AddSkills from './components/Skills/skill';
import AddTechnology from './components/Technology/AddTechnology';
import AddDepartment from './components/Departments/AddDepartment';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import{Route, Routes,BrowserRouter} from "react-router-dom"
import Header from './components/Home/Header';
import Login from './components/Login/Login';
import AddProjectMapping from './components/AdminDashboard/ProjectMapping';
import AddResources from './components/Resources/Resource';
import EmployeeDashboard from './components/EmployeeDashboard/EmployeeDashboard';
// import {Route,} from "react-router-dom";



 const App = () => {
  return (
    // <div className="App">
  
     
    <BrowserRouter>


      <Header/>
   
      
      
      <Routes>
          <Route path='/login' element={<Login/>}/>

          <Route path='/addproject' element={<AddProjects/>}/>
          <Route path='/projectlist' element={<ListProjectComponent/>}/>
          <Route path='/department' element={<AddDepartment/>}/>
          <Route path='/technology' element={<AddTechnology/>}/>
          <Route path='/employee' element={<AddEmployees/>}/>
          <Route path='/skill' element={<AddSkills/>}/>
          <Route path='/admindashboard' element={<AdminDashboard/>}/>
          <Route path='/employeedashboard' element={<EmployeeDashboard/>}/>
          <Route path='/addresource' element={<AddResources/>}/>
          <Route path='/projectmapping' element={<AddProjectMapping/>}/>
        </Routes>
    </BrowserRouter>
    
    

      

   

    //   {/* <AddProjects/>
    //  <AddEmployees/>
    //  <AddSkills/> */}
    // </div>
  );
}

export default App;
