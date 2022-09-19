import React from "react";
// import logo from './logo.svg';
import "./App.css";

import AddProjects from "./components/Projects/AddProject";
import ListProjectComponent from "./components/Projects/ProjectList";
import AddEmployees from "./components/Employees/AddEmployee";
import AddSkills from "./components/Skills/AddSkill";
import AddTechnology from "./components/Technology/AddTechnology";
import AddDepartment from "./components/Departments/AddDepartment";
import AdminDashboard from "./components/Dashboards/AdminDashboard";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/Home/Header";
import Login from "./components/Login/Login";
import AddProjectMapping from "./components/Projects/ProjectMapping";
import AddResources from "./components/Resources/AddResource";
import EmployeeDashboard from "./components/Dashboards/EmployeeDashboard";
import NotFound from "./components/NotFound/NotFound";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import ExtraInfo from "./components/Home/ExtraInfo";
import Copyright from "./components/Home/Copyright";



const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/addproject" element={<AddProjects />} />
        <Route path="/projectlist" element={<ListProjectComponent />} />
        <Route path="/department" element={<AddDepartment />} />
        <Route path="/technology" element={<AddTechnology />} />
        <Route path="/employee" element={<AddEmployees />} />
        <Route path="/skill" element={<AddSkills />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/employeedashboard" element={<EmployeeDashboard />} />
        <Route path="/addresource" element={<AddResources />} />
        <Route path="/projectmapping" element={<AddProjectMapping />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        {/* <Route path="/teampage" element={<TeamPage/>} /> */}
      </Routes>

      

    
      
        
      <footer className="footer section ">
        <ExtraInfo />
        <Copyright />
      </footer>
      
    
  )
    </BrowserRouter>
  );
};

export default App;
